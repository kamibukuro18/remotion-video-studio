import { Audio, Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { AbsoluteFill } from 'remotion';
import { TalkSequence } from './character/Talk/TalkSequence';
import { CharacterSequence } from './character/CharacterSequence';
import React from 'react';
import { VIDEO_SETTINGS, zIndex } from './constants';
import { VideoConfig } from './character/characterVideoConfig';
import { getTotalFramesBeforeSection } from './utils/getTotalFramesBeforeSection';
import { LoopedOffthreadVideo } from './components/LoopedOffthreadVideo';
import { SubtitleWithBackground } from './Subtitle/SubtitleBackground';

export const CharacterVideo: React.FC<{
  videoConfig: VideoConfig;
}> = ({ videoConfig }) => {
  return (
    <AbsoluteFill style={{
      backgroundColor: VIDEO_SETTINGS.videoBackground.backgroundColor,
      backgroundImage: `url(${staticFile(VIDEO_SETTINGS.videoBackground.backgroundImage)})`,
      backgroundSize: VIDEO_SETTINGS.videoBackground.backgroundSize,
      backgroundPosition: VIDEO_SETTINGS.videoBackground.backgroundPosition,
    }}>
      {videoConfig.sections.map((section, index) => {
        const cumulateFrames = getTotalFramesBeforeSection(videoConfig, index);

        const fromFrameMap = { ...section.fromFramesMap };
        Object.keys(fromFrameMap).forEach((key) => {
          fromFrameMap[Number(key)] += cumulateFrames;
        });

        return (
          <React.Fragment key={index}>
            <Sequence
              from={cumulateFrames}
              durationInFrames={Math.max(
                1,
                section.totalFrames - (section.afterMovieFrames || 0)
              )}
            >
              {section.bgmSrc && (
                // @ts-ignore
                <Audio
                  loop
                  src={staticFile(section.bgmSrc)}
                  volume={Number(section.bgmVolume || 1)}
                />
              )}
              {section.backgroundVideo && (
                <>
                  <LoopedOffthreadVideo
                    isMuted
                    src={staticFile(section.backgroundVideo)}
                  />
                  {section.showBgVideoOverlay && (
                    <div
                      style={{
                        ...VIDEO_SETTINGS.videoOverlay,
                        zIndex: zIndex.anyValue,
                      }}
                    />
                  )}
                </>
              )}
            </Sequence>

            <TalkSequence
              {...section}
              fromFramesMap={fromFrameMap}
              totalFrames={cumulateFrames + section.totalFrames}
            />

            <CharacterSequence {...section} fromFramesMap={fromFrameMap} videoConfig={videoConfig} />

            {section.beforeMovie && (
              <Sequence
                from={cumulateFrames}
                durationInFrames={fromFrameMap[0]}
              >
                <OffthreadVideo
                  style={{ zIndex: zIndex.transitionMovie }}
                  src={staticFile(section.beforeMovie)}
                />
              </Sequence>
            )}
            {section.afterMovie && section.afterMovieFrames && (
              <Sequence
                from={
                  cumulateFrames +
                  section.totalFrames -
                  section.afterMovieFrames +
                  (section.afteMovieDelay || 0)
                }
                durationInFrames={section.afterMovieFrames}
              >
                <OffthreadVideo
                  style={{ zIndex: zIndex.transitionMovie }}
                  src={staticFile(section.afterMovie)}
                  volume={section.afterMovieVolume}
                />
              </Sequence>
            )}
          </React.Fragment>
        );
      })}

      {/* <div style={logoStyle}>
        <Img src={staticFile('image/yukkurilogo.png')} />
      </div> */}

      <div style={jimakuBackground} />

      {/* VOICEVOXクレジット表記 */}
      <div style={{
        ...VIDEO_SETTINGS.voicevoxCreditStyle,
        zIndex: zIndex.subtitle + 1,
      }}>
        VOICEVOX:ずんだもん
      </div>
    </AbsoluteFill>
  );
};

const jimakuBackground: React.CSSProperties = {
  position: 'absolute',
  width: VIDEO_SETTINGS.characterVideoJimakuBackground.width,
  height: `${VIDEO_SETTINGS.subtitleHeightPx}px`,
  bottom: VIDEO_SETTINGS.characterVideoJimakuBackground.bottom,
  left: VIDEO_SETTINGS.characterVideoJimakuBackground.left,
  backgroundImage: `url(${staticFile(VIDEO_SETTINGS.characterVideoJimakuBackground.backgroundImage)})`,
  backgroundPosition: VIDEO_SETTINGS.characterVideoJimakuBackground.backgroundPosition,
  display: VIDEO_SETTINGS.characterVideoJimakuBackground.display,
  alignItems: VIDEO_SETTINGS.characterVideoJimakuBackground.alignItems,
  justifyContent: VIDEO_SETTINGS.characterVideoJimakuBackground.justifyContent,
  zIndex: zIndex.anyValue,
};

// const logoStyle: React.CSSProperties = { ... } (削除)
// const voicevoxCreditStyle: React.CSSProperties = { ... } (削除)
