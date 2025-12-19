import React, {useEffect, useState} from 'react';
import {
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {VIDEO_SETTINGS, zIndex} from '../../constants';

export type CharacterProps = {
  isTalking?: boolean; // isTalkingプロパティを追加
};

// const DEFAULT_CHARACTER_SIZE_PX = 320; // YukkuriSequenceで制御するため削除

// ふわふわアニメーション関連の定数を削除
// const FuyoFuyoInterval = 40;
// const FuyoFuyoRange = 2;

// ふわふわアニメーション関連の関数を削除
// function addFuyoFuyoRange(intervals: number[]) {
//   if (intervals.length === 0) {
//     intervals.push(FuyoFuyoRange);
//     return;
//   }

//   if (intervals[intervals.length - 1] === FuyoFuyoRange) {
//     intervals.push(-FuyoFuyoRange);
//   } else {
//     intervals.push(FuyoFuyoRange);
//   }
// }

// function getFuyoFuyoFrames(videoFrames: number) {
//   const frames: number[] = [0]; // isReimu の考慮を削除
//   const intervals: number[] = [FuyoFuyoRange];

//   let left = videoFrames;
//   while (left > FuyoFuyoInterval) {
//     frames.push(frames[frames.length - 1] + FuyoFuyoInterval);
//     left -= FuyoFuyoInterval;

//     addFuyoFuyoRange(intervals);
//   }

//   if (left > 0) {
//     frames.push(frames[frames.length - 1] + left);
//     addFuyoFuyoRange(intervals);
//   }

//   return [frames, intervals];
// }

export const CharacterFace: React.FC<CharacterProps> = ({
  isTalking,
}) => {
  const frame = useCurrentFrame();
  const video = useVideoConfig();

  // ふわふわアニメーション関連のuseMemoとinterpolateを削除
  // const [frames, intervals] = useMemo(
  //   () => getFuyoFuyoFrames(video.durationInFrames),
  //   [video]
  // );

  // const translateY = interpolate(frame, frames, intervals, {
  //   easing: Easing.bezier(0.51, 0, 0.49, 1),
  // });

  const [eyeState, setEyeState] = useState<string>('00'); // 通常の目から開始
  const [isMouthOpen, setIsMouthOpen] = useState<boolean>(false); // 口パクの状態を追加

  useEffect(() => {
    const blinkIntervalFrames = VIDEO_SETTINGS.mabatakiIntervalSeconds * video.fps;
    const animationDurationFrames = VIDEO_SETTINGS.mabatakiAnimationDurationFrames;

    const MABATAKI_ANIMATION_FRAMES = [
      VIDEO_SETTINGS.characterMabatakiAnimationThreshold1 * animationDurationFrames,
      VIDEO_SETTINGS.characterMabatakiAnimationThreshold2 * animationDurationFrames,
      VIDEO_SETTINGS.characterMabatakiAnimationThreshold3 * animationDurationFrames,
      VIDEO_SETTINGS.characterMabatakiAnimationThreshold4 * animationDurationFrames,
    ];

    const frameInInterval = frame % blinkIntervalFrames;

    if (frameInInterval < MABATAKI_ANIMATION_FRAMES[0]) {
      setEyeState('00'); // 通常
    } else if (frameInInterval >= MABATAKI_ANIMATION_FRAMES[0] && frameInInterval < MABATAKI_ANIMATION_FRAMES[1]) {
      setEyeState('01'); // 少し閉じる
    } else if (frameInInterval >= MABATAKI_ANIMATION_FRAMES[1] && frameInInterval < MABATAKI_ANIMATION_FRAMES[2]) {
      setEyeState('02'); // 完全に閉じる
    } else if (frameInInterval >= MABATAKI_ANIMATION_FRAMES[2] && frameInInterval < MABATAKI_ANIMATION_FRAMES[3]) {
      setEyeState('01'); // 少し閉じるに戻る
    } else {
      setEyeState('00'); // 通常に戻る
    }

    // 口パクのロジックを追加
    if (isTalking) {
      const mouthCycleLength = VIDEO_SETTINGS.mouthCycleLength; // 口パクの1周期の長さ (フレーム数)
      setIsMouthOpen(frame % mouthCycleLength < mouthCycleLength / 2); // 周期の半分で口を開く
    } else {
      setIsMouthOpen(false); // しゃべっていないときは口を閉じる
    }
  }, [frame, isTalking]);

  // const charSizePx = sizePx ? sizePx : DEFAULT_CHARACTER_SIZE_PX; // YukkuriSequenceで制御するため削除

  return (
    <div /* style={{transform: `translateY(${translateY}%)`}} */ > {/* transformスタイルを削除 */}
      <Img
        src={staticFile(`${VIDEO_SETTINGS.characterFaceImagePrefix}${eyeState}${VIDEO_SETTINGS.characterFaceImageExtension}`)}
        style={{width: '100%', height: '100%', objectFit: 'contain'}} // 幅と高さを100%に設定
      />
      {isTalking && isMouthOpen && ( // isMouthOpenも条件に追加
        <Img
          src={staticFile(VIDEO_SETTINGS.characterMouthImagePath)}
          style={mouthStyle}
        />
      )}
    </div>
  );
};

const mouthStyle: React.CSSProperties = {
  position: 'absolute',
  top: VIDEO_SETTINGS.characterFaceMouthTop,
  left: VIDEO_SETTINGS.characterFaceMouthLeft,
  width: VIDEO_SETTINGS.characterFaceMouthWidth,
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  zIndex: zIndex.character + 1, // キャラクター本体より前面に表示
};
