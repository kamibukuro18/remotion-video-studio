import {Sequence, useCurrentFrame} from 'remotion';
import {useMemo} from 'react';
import {VIDEO_SETTINGS, zIndex} from '../constants';
import {CharacterFace} from './Face/CharacterFace';
import {VideoConfig, VoiceConfig} from './characterVideoConfig';
// import {getTotalFramesBeforeSection} from '../../utils/getTotalFramesBeforeSection'; // インポートを削除

export type Props = {
  talks: VoiceConfig[];
  fromFramesMap: {[key in number]: number};
  videoConfig: VideoConfig;
};

export const CharacterSequence: React.FC<Props> = ({talks, fromFramesMap, videoConfig}) => {
  const frame = useCurrentFrame();

  const isTalking = useMemo(() => {
    for (const section of videoConfig.sections) {
      let sectionCumulateFrames = 0; // インラインで累積フレーム数を計算
      const currentSectionIndex = videoConfig.sections.indexOf(section);
      for (let i = 0; i < currentSectionIndex; i++) {
        sectionCumulateFrames += videoConfig.sections[i].totalFrames;
      }
      
      for (let i = 0; i < section.talks.length; i++) {
        const talk = section.talks[i];
        // fromFramesMapはセクション内のインデックスに基づいているため、cumulateFramesを追加
        const talkFromFrame = fromFramesMap[i] + sectionCumulateFrames;
        const talkToFrame = talkFromFrame + talk.audioDurationFrames;

        if (frame >= talkFromFrame && frame < talkToFrame) {
          return true;
        }
      }
    }
    return false;
  }, [frame, videoConfig, fromFramesMap]);

  console.log(`Frame: ${frame}, Is Talking: ${isTalking}`); // デバッグ用ログ

  return (
    <Sequence>
      <div style={characterStyle}>
        <CharacterFace isTalking={isTalking} />
      </div>
    </Sequence>
  );
};

const characterStyle: React.CSSProperties = {
  position: 'absolute',
  right: VIDEO_SETTINGS.characterSequenceCharacterRight,
  bottom: VIDEO_SETTINGS.characterSequenceCharacterBottom,
  height: 'auto',
  width: VIDEO_SETTINGS.characterSequenceCharacterWidth,
  zIndex: zIndex.character,
};
