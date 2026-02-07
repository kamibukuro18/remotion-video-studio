import * as fs from 'fs';
import crypto from 'crypto';

const forceGenerate = process.argv[2] === 'force';

if (forceGenerate) {
  const fsExtra = require('fs-extra');
fsExtra.emptyDirSync('./public/audio/character');
}

// Audio cache file path
const AUDIO_CACHE_PATH = './transcripts/playground-audio-cache.json';

type AudioCache = {
  [textHash: string]: {
    id: string;
    audioDurationFrames: number;
  };
};

function getTextHash(text: string): string {
  return crypto.createHash('md5').update(text).digest('hex');
}

(async () => {
  // Import config
  const playgroundModule = await import('../transcripts/playground');
  const talks = playgroundModule.PLAYGROUND_TALKS;
  // const settings = playgroundModule.PLAYGROUND_SETTINGS;
  
  const { VIDEO_SETTINGS } = await import('../src/constants');

  // Load existing cache
  let audioCache: AudioCache = {};
  if (fs.existsSync(AUDIO_CACHE_PATH)) {
    audioCache = JSON.parse(fs.readFileSync(AUDIO_CACHE_PATH, 'utf-8'));
  }

  // Generate audio for each talk
  const { generateVoicevoxAudio } = await import('./voicevoxUtils');
  // Speaker ID reference:
  // metan=2, zundamon=3, tsumugi=8, hau=10, ritsu=11, takehiro=12
  // kotaro=13, ryusei=14, himari=15, sora=16, mochiko=20, mesuo=21, aerutan=22
  const SPEAKER_ID = VIDEO_SETTINGS.voicevoxSpeakerId;
  const VOICE_SPEED = VIDEO_SETTINGS.voicevoxSpeed;

  for (const talk of talks) {
    const textHash = getTextHash(talk.text);
    let audioInfo = audioCache[textHash];

    if (!audioInfo || forceGenerate) {
      // Generate new audio
      const id = require('uuid').v4().replaceAll('-', '');
      const filename = `${id}.wav`;
      const filepath = `./public/audio/character/${filename}`;

      if (!fs.existsSync('./public/audio/character')) {
        fs.mkdirSync('./public/audio/character', { recursive: true });
      }

      try {
        console.log(`Generating audio: ${talk.text.substring(0, 30)}...`);
        await generateVoicevoxAudio(talk.text, SPEAKER_ID, VOICE_SPEED, filepath);

        // Get duration
        const { getAudioDurationInSeconds } = require('get-audio-duration');
        const durationSec = await getAudioDurationInSeconds(filepath);
        const audioDurationFrames = Math.ceil(durationSec * 30);

        audioInfo = { id, audioDurationFrames };
        audioCache[textHash] = audioInfo;
      } catch (e) {
        console.error(`Failed to generate audio for ${talk.text}`, e);
        continue;
      }
    }
  }

  // Save cache
  fs.writeFileSync(AUDIO_CACHE_PATH, JSON.stringify(audioCache, null, 2));

  // Generate VideoConfig
  // Resolve slide media dynamically instead of static BG_IMAGES.
  // const BG_IMAGES = [
  //   '/image/remotion-logo.png',
  //   '/image/react-logo.png',
  //   '/image/html_css_javascript.jpeg',
  //   '/image/react-face-sample.png',
  //   '/image/jimakuimage.png',
  //   '/image/gunyogunyoanimation.png',
  //   '/image/setting-file.png',
  // ];

  const voiceConfigs: any[] = [];
  const fromFramesMap: { [key: number]: number } = {};
  let currentFrame = 30;
  let lastSlide: {
    videoIndex: number;
    image: { src: string; durationInFrames?: number };
  } | null = null;

  for (let index = 0; index < talks.length; index++) {
    const talk = talks[index];
    const textHash = getTextHash(talk.text);
    const audioInfo = audioCache[textHash];

    if (!audioInfo) continue;

    fromFramesMap[index] = currentFrame;

    const voiceConfig: any = {
      text: talk.text,
      id: audioInfo.id,
      audioDurationFrames: audioInfo.audioDurationFrames,
      seSounds: talk.seSounds ? talk.seSounds.map(se => ({
        ...se,
        src: se.src.startsWith('/') ? se.src : `/${se.src}`,
      })) : undefined,
    };

    if (talk.videoIndex !== undefined) {
      const videoPath = `./public/slides/${talk.videoIndex}.mp4`;
      const imagePath = `./public/slides/${talk.videoIndex}.png`;
      
      let finalSrc: string;
      let durationInFrames: number | undefined;

      if (fs.existsSync(videoPath)) {
        finalSrc = `/slides/${talk.videoIndex}.mp4`;
        durationInFrames = VIDEO_SETTINGS.defaultVideoDurationFrames;
      } else if (fs.existsSync(imagePath)) {
        finalSrc = `/slides/${talk.videoIndex}.png`;
      } else {
        console.warn(`Warning: Neither ${videoPath} nor ${imagePath} found for videoIndex ${talk.videoIndex}`);
        continue; // Skip when neither video nor image exists.
      }
      voiceConfig.image = { src: finalSrc, durationInFrames: durationInFrames };
      lastSlide = {
        videoIndex: talk.videoIndex,
        image: { ...voiceConfig.image },
      };
    } else if (lastSlide) {
      // Keep previous slide when videoIndex is omitted.
      // If previous was mp4, prefer same-index png when available.
      if (lastSlide.image.src.endsWith('.mp4')) {
        const fallbackImagePath = `./public/slides/${lastSlide.videoIndex}.png`;
        if (fs.existsSync(fallbackImagePath)) {
          voiceConfig.image = { src: `/slides/${lastSlide.videoIndex}.png` };
          lastSlide = {
            videoIndex: lastSlide.videoIndex,
            image: { ...voiceConfig.image },
          };
        } else {
          voiceConfig.image = { ...lastSlide.image };
        }
      } else {
        voiceConfig.image = { ...lastSlide.image };
      }
    }

    voiceConfigs.push(voiceConfig);

    const delayFrames = Math.floor(talk.delayForNextTalkInSeconds * 30);
    currentFrame += audioInfo.audioDurationFrames + delayFrames;
  }

  const playgroundConfig = {
    sections: [
      {
        title: VIDEO_SETTINGS.videoTitle,
        fromFramesMap,
        talks: voiceConfigs,
        totalFrames: currentFrame + 60,
        characterLipSyncMap: { frames: [], amplitude: [] },
        reimuLipSyncMap: { frames: [], amplitude: [] },
        marisaLipSyncMap: { frames: [], amplitude: [] },
        beforeMovieFrames: 0,
        afterMovieFrames: 0,
      },
    ],
  };

  // Read the current file
  const playgroundPath = './transcripts/playground.tsx';
  const currentContent = fs.readFileSync(playgroundPath, 'utf-8');

  // Find the GENERATED SECTION
  const startMarker = '// ==================== GENERATED SECTION START ====================';
  const endMarker = '// ==================== GENERATED SECTION END ====================';

  const startIndex = currentContent.indexOf(startMarker);
  const endIndex = currentContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find GENERATED SECTION markers in playground.tsx');
    process.exit(1);
  }

  // Replace the generated section
  const beforeSection = currentContent.substring(0, startIndex + startMarker.length);
  const afterSection = currentContent.substring(endIndex);

  const generatedSection = `
// This section is auto-generated. Do not edit directly.
// Audio generation: npx ts-node scripts/generateCharacterVoiceFiles.ts

export const PlaygroundConfig: VideoConfig = ${JSON.stringify(playgroundConfig, null, 2)};

`;

  const newContent = beforeSection + '\n' + generatedSection + afterSection;

  fs.writeFileSync(playgroundPath, newContent);

  console.log('Audio generation complete');
  console.log('Updated playground.tsx');
  console.log(`Audio cache saved (${Object.keys(audioCache).length} entries)`);
  console.log('Restart Remotion preview to see changes');
})();
