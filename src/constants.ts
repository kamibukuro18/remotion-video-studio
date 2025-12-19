export const VIDEO_SETTINGS = {
  // フレームレート (1秒あたりのフレーム数)
  fps: 30,
  // セリフ間の間隔 (フレーム数)
  talkGapFrames: 25,
  // 字幕エリアの高さ (ピクセル)
  subtitleHeightPx: 110,
  // 各セクションの開始時のデフォルト遅延 (フレーム数)
  defaultSectionInitialDelayFrames: 30,
  // 各セクションの終了時のデフォルト遅延 (フレーム数)
  defaultSectionEndFrames: 30,
  // キャラクターの幅の割合 (画面全体に対する比率)
  characterWidthPercentage: 0.15,
  // 字幕の自動改行文字数 (全角文字は2文字としてカウント)
  subtitleMaxLength: 62,
  subtitleLineHeight: 1.4,
  // 口パクの1周期の長さ (フレーム数)。例: 6フレームなら3フレーム開いて3フレーム閉じる
  mouthCycleLength: 6,
  // まばたきの間隔 (秒)
  mabatakiIntervalSeconds: 5,
  // まばたきアニメーションの総フレーム数
  mabatakiAnimationDurationFrames: 15,

  // 字幕のフォントとスタイル
  subtitleFontFamily: 'sans-serif',
  subtitleFontSizePx: 38,
  subtitleFontWeight: 'bold',
  subtitleLetterSpacing: '0.05em',
  subtitleColor: '#fff',
  subtitleStrokeColor: '#C90003',
  subtitleStrokeWidthPx: 4,
  // 字幕の位置
  subtitleTop: -80,
  subtitleLeft: 40,
  subtitlePaddingTop: 20,
  subtitlePaddingLeft: 20,

  // 字幕背景の位置とサイズ
  subtitleBackgroundWidth: '100%',
  subtitleBackgroundBottom: 0,

  // YukkuriFaceの口の位置とサイズ
  yukkuriFaceMouthTop: '49.6%',
  yukkuriFaceMouthLeft: '50%',
  yukkuriFaceMouthWidth: '100%',

  // YukkuriSequenceのキャラクターの位置とサイズ
  yukkuriSequenceCharacterRight: '-23%',
  yukkuriSequenceCharacterBottom: '-750px',
  yukkuriSequenceCharacterWidth: '67%',

  // YukkuriFaceの画像パスとまばたきアニメーションの閾値
  yukkuriFaceImagePrefix: 'char/',
  yukkuriFaceImageExtension: '.png',
  yukkuriMouthImagePath: 'char/mouth/01.png',
  yukkuriMabatakiAnimationThreshold1: 0.2,
  yukkuriMabatakiAnimationThreshold2: 0.4,
  yukkuriMabatakiAnimationThreshold3: 0.6,
  yukkuriMabatakiAnimationThreshold4: 0.8,
} as const;

export const zIndex = {
  anyValue: 1,
  subtitle: 10,
  yukkuri: 10,
  transitionMovie: 10000,
} as const;
