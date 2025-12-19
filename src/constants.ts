export const VIDEO_SETTINGS = {
  // グローバルな動画設定
  fps: 30,
  talkGapFrames: 25,
  defaultSectionInitialDelayFrames: 30,
  defaultSectionEndFrames: 30,

  // キャラクター関連設定
  characterWidthPercentage: 0.15,
  mouthCycleLength: 6,
  mabatakiIntervalSeconds: 5,
  mabatakiAnimationDurationFrames: 15,
  yukkuriFaceImagePrefix: 'char/',
  yukkuriFaceImageExtension: '.png',
  yukkuriMouthImagePath: 'char/mouth/01.png',
  yukkuriMabatakiAnimationThreshold1: 0.2,
  yukkuriMabatakiAnimationThreshold2: 0.4,
  yukkuriMabatakiAnimationThreshold3: 0.6,
  yukkuriMabatakiAnimationThreshold4: 0.8,
  yukkuriFaceMouthTop: '49.6%',
  yukkuriFaceMouthLeft: '50%',
  yukkuriFaceMouthWidth: '100%',
  yukkuriSequenceCharacterRight: '-23%',
  yukkuriSequenceCharacterBottom: '-750px',
  yukkuriSequenceCharacterWidth: '67%',

  // 字幕関連設定
  subtitleHeightPx: 110,
  subtitleMaxLength: 62,
  subtitleLineHeight: 1.4,
  subtitleFontFamily: 'sans-serif',
  subtitleFontSizePx: 38,
  subtitleFontWeight: 'bold',
  subtitleLetterSpacing: '0.05em',
  subtitleColor: '#fff',
  subtitleStrokeColor: '#C90003',
  subtitleStrokeWidthPx: 4,
  subtitleTop: -80,
  subtitleLeft: 40,
  subtitlePaddingTop: 20,
  subtitlePaddingLeft: 20,

  // 字幕背景関連設定
  subtitleBackgroundWidth: '100%',
  subtitleBackgroundBottom: 0,
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
  // YukkuriVideo のロゴスタイル (未使用のため削除)
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
