import { Audio, Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { CustomObjects } from '../../../transcripts/CustomObjects';
import { VIDEO_SETTINGS } from '../../constants'; // VIDEO_SETTINGSをインポート
import { SubtitleWithBackground } from '../../Subtitle/SubtitleBackground';
import { VoiceConfig } from '../characterVideoConfig';
import { insertLineBreaks } from '../../utils/textUtils';

export type TalkProps = {
  voiceConfig: VoiceConfig;
  from?: number;
  meta: {
    talks: VoiceConfig[];
    index: number;
  };
};

const getDurationInFrames = (voiceConfig: VoiceConfig) =>
  voiceConfig.customDuration ||
  voiceConfig.audioDurationFrames + VIDEO_SETTINGS.talkGapFrames; // VIDEO_SETTINGS.talkGapFrames を参照

const getBackgroundVideoDuration = (
  currentTalk: VoiceConfig,
  talks: VoiceConfig[],
  index: number
) => {
  const video = currentTalk.backgroundVideo;

  if (!video) {
    return 1; // Return 1 frame if no background video
  }

  let duration = getDurationInFrames(currentTalk);

  if (video.extendTalksCount) {
    for (let i = 1; i <= video.extendTalksCount; i++) {
      duration += getDurationInFrames(talks[index + i]);
    }
  }
  return duration;
};

const isSameImageSlide = (
  a?: VoiceConfig['image'],
  b?: VoiceConfig['image'],
) => {
  if (!a || !b) {
    return false;
  }
  return a.src === b.src && a.backgroundColor === b.backgroundColor;
};

const getImageDuration = (
  currentTalk: VoiceConfig,
  talks: VoiceConfig[],
  index: number,
) => {
  if (!currentTalk.image) {
    return 1;
  }

  let duration = getDurationInFrames(currentTalk);

  for (let i = index + 1; i < talks.length; i++) {
    if (!isSameImageSlide(currentTalk.image, talks[i].image)) {
      break;
    }
    duration += getDurationInFrames(talks[i]);
  }

  return duration;
};

export const Talk: React.FC<TalkProps> = ({ voiceConfig, from, meta }) => {
  const hasAudio = Boolean(voiceConfig.id) || Boolean(voiceConfig.ids);

  const CustomObject = voiceConfig.customObjectKey
    ? CustomObjects[voiceConfig.customObjectKey]
    : null;

  const durationInFrames = getDurationInFrames(voiceConfig);
  const previousTalk = meta.index > 0 ? meta.talks[meta.index - 1] : undefined;
  const shouldRenderImage =
    Boolean(voiceConfig.image) &&
    !isSameImageSlide(previousTalk?.image, voiceConfig.image);
  const imageDurationInFrames = shouldRenderImage
    ? getImageDuration(voiceConfig, meta.talks, meta.index)
    : 1;

  const subtitleText = insertLineBreaks(voiceConfig.textForDisplay || voiceConfig.text, 67); // ここで自動改行を適用

  return (
    <>
      <Sequence durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
        <SubtitleWithBackground
          subtitle={subtitleText}
        />
      </Sequence>

      {hasAudio &&
        (voiceConfig.ids && voiceConfig.ids.length > 0 ? (
          voiceConfig.ids.map((id) => {
            return (
              <Sequence key={id} durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
                {/* @ts-ignore */}
                <Audio src={staticFile(`audio/character/${id}.wav`)} />
              </Sequence>
            );
          })
        ) : (
          <Sequence durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
            {/* @ts-ignore */}
            <Audio src={staticFile(`audio/character/${voiceConfig.id}.wav`)} />
          </Sequence>
        ))}

      {shouldRenderImage && voiceConfig.image && (
        <Sequence
          durationInFrames={Math.max(1, imageDurationInFrames)}
          from={(from || 0) + (voiceConfig.image.from || 0)}
        >
          <div
            style={{
              ...imagePosition,
              backgroundColor: voiceConfig.image.backgroundColor,
            }}
          >
            {voiceConfig.image.src.endsWith('.mp4') ? (
              <OffthreadVideo
                muted
                src={staticFile(voiceConfig.image.src)}
                style={imageStyle}
              />
            ) : (
              <Img src={staticFile(voiceConfig.image.src)} style={imageStyle} />
            )}
          </div>
        </Sequence>
      )}

      {voiceConfig.audio && (
        <Sequence
          durationInFrames={Math.max(1, durationInFrames)}
          from={(from || 0) + (voiceConfig.audio.from || 0)}
        >
          {/* @ts-ignore */}
          <Audio
            src={staticFile(voiceConfig.audio.src)}
            // eslint-disable-next-line
            volume={voiceConfig.audio.volume || 1}
          />
        </Sequence>
      )}

      {voiceConfig.seSounds &&
        voiceConfig.seSounds.map((se, index) => (
          <Sequence key={index} durationInFrames={Math.max(1, durationInFrames)} from={from || 0}>
            {/* @ts-ignore */}
            <Audio src={staticFile(se.src)} volume={se.volume || 1} />
          </Sequence>
        ))}

      {voiceConfig.backgroundVideo && (
        <Sequence
          durationInFrames={Math.max(1, getBackgroundVideoDuration(
            voiceConfig,
            meta.talks,
            meta.index
          ))}
          from={(from || 0) + (voiceConfig.backgroundVideo.from || 0)}
        >
          <div
            style={{
              ...imagePosition,
              backgroundColor: voiceConfig.backgroundVideo.backgroundColor,
            }}
          >
            <OffthreadVideo
              muted
              src={staticFile(voiceConfig.backgroundVideo.src)}
              style={{ maxHeight: '100%' }}
            />
          </div>
        </Sequence>
      )}

      {CustomObject && (
        <Sequence durationInFrames={Math.max(1, durationInFrames)} from={from || 0}>
          <CustomObject />
        </Sequence>
      )}
    </>
  );
};

const imagePosition: React.CSSProperties = {
  position: 'absolute',
  height: VIDEO_SETTINGS.slideHeight,
  top: VIDEO_SETTINGS.slideTop,
  left: VIDEO_SETTINGS.slideLeft,
  width: VIDEO_SETTINGS.slideWidth,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle: React.CSSProperties = {
  objectFit: 'contain',
  padding: VIDEO_SETTINGS.slideImagePadding,
  width: '100%',
  height: '100%',
};
