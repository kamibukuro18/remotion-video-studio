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

  // YukkuriVideo のルートスタイル
  videoBackground: {
    backgroundColor: '#000',
    backgroundImage: 'image/background.png',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  // YukkuriVideo の背景動画オーバーレイのスタイル
  videoOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
  },
  // YukkuriVideo の字幕背景スタイル (重複するjimakuBackground)
  yukkuriVideoJimakuBackground: {
    width: 'calc(75%)',
    bottom: 25,
    left: 40,
    backgroundImage: 'image/Cyber_telop2_black.png',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // YukkuriVideo のロゴスタイル
  logoStyle: {
    top: '40px',
    left: '40px',
    opacity: 0.8,
  },
  // YukkuriVideo のVOICEVOXクレジットスタイル
  voicevoxCreditStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    top: 'auto',
    left: 'auto',
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '8px 12px',
    borderRadius: '4px',
  },
} as const;

export const zIndex = {
  anyValue: 1,
  subtitle: 10,
  yukkuri: 10,
  transitionMovie: 10000,
} as const;
