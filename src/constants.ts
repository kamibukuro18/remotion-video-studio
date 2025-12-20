export const VIDEO_SETTINGS = {
  // グローバルな動画設定
  fps: 30, // フレームレート (1秒あたりのフレーム数)
  talkGapFrames: 25, // セリフ間のデフォルトの間隔 (フレーム数)
  defaultSectionInitialDelayFrames: 30, // 各セクションの開始時のデフォルト遅延 (フレーム数)
  defaultSectionEndFrames: 30, // 各セクションの終了時のデフォルト遅延 (フレーム数)

  videoTitle: 'Playground', // 動画のタイトル

  // BGM関連設定
  defaultBgmSrc: '/audio/bgm/2_23_AM_2.mp3', // デフォルトBGMのパス
  defaultBgmVolume: 0.05, // デフォルトBGMの音量 (0.0〜1.0)　変更後は    npx ts-node scripts/generateCharacterVoiceFiles.ts force を実行してください

  // キャラクター関連設定
  characterWidthPercentage: 0.15, // キャラクターの幅の割合 (画面全体に対する比率)
  mouthCycleLength: 6, // 口パクの1周期の長さ (フレーム数)。例: 6フレームなら3フレーム開いて3フレーム閉じる
  mabatakiIntervalSeconds: 5, // まばたきの間隔 (秒)
  mabatakiAnimationDurationFrames: 15, // まばたきアニメーションの総フレーム数
  characterFaceImagePrefix: 'char/', // キャラクターの顔画像のファイル名プレフィックス
  characterFaceImageExtension: '.png', // キャラクターの顔画像のファイル名拡張子
  characterMouthImagePath: 'char/mouth/01.png', // キャラクターの口画像のパス
  characterMabatakiAnimationThreshold1: 0.2, // まばたきアニメーションの閾値1 (閉じる開始)
  characterMabatakiAnimationThreshold2: 0.4, // まばたきアニメーションの閾値2 (完全に閉じる)
  characterMabatakiAnimationThreshold3: 0.6, // まばたきアニメーションの閾値3 (開く開始)
  characterMabatakiAnimationThreshold4: 0.8, // まばたきアニメーションの閾値4 (完全に開く)
  characterFaceMouthTop: '49.6%', // キャラクターの口の位置 (上からの相対位置)
  characterFaceMouthLeft: '50%', // キャラクターの口の位置 (左からの相対位置)
  characterFaceMouthWidth: '100%', // キャラクターの口の幅 (顔に対する相対幅)
  characterSequenceCharacterRight: '-23%', // キャラクターシーケンスでのキャラクターの右端からの位置
  characterSequenceCharacterBottom: '-750px', // キャラクターシーケンスでのキャラクターの下端からの位置
  characterSequenceCharacterWidth: '67%', // キャラクターシーケンスでのキャラクターの幅

  // 音声関連設定
  voicevoxSpeakerId: 3, // VoiceVox の話者ID (詳細: scripts/voicevoxUtils.ts のコメント参照)
  voicevoxSpeed: 1, // VoiceVox の話速 (1.0が標準)

  // 字幕関連設定
  subtitleHeightPx: 110, // 字幕エリアの高さ (ピクセル)
  subtitleMaxLength: 62, // 字幕の自動改行文字数 (全角文字は2文字としてカウント)
  subtitleLineHeight: 1.4, // 字幕の行の高さ
  subtitleFontFamily: 'sans-serif', // 字幕のフォントファミリー
  subtitleFontSizePx: 38, // 字幕のフォントサイズ (ピクセル)
  subtitleFontWeight: 'bold', // 字幕のフォントウェイト
  subtitleLetterSpacing: '0.05em', // 字幕の文字間隔
  subtitleColor: '#fff', // 字幕の文字色
  subtitleStrokeColor: '#C90003', // 字幕の縁取り色
  subtitleStrokeWidthPx: 4, // 字幕の縁取り幅 (ピクセル)
  subtitleTop: -80, // 字幕の位置 (上からの相対位置)
  subtitleLeft: 40, // 字幕の位置 (左からの相対位置)
  subtitlePaddingTop: 20, // 字幕のパディング (上)
  subtitlePaddingLeft: 20, // 字幕のパディング (左)

  // 字幕背景関連設定
  subtitleBackgroundWidth: '100%', // 字幕背景の幅
  subtitleBackgroundBottom: 0, // 字幕背景の下端からの位置
  characterVideoJimakuBackground: { // キャラクター動画の字幕背景スタイル
    width: 'calc(75%)', // 字幕背景の幅
    bottom: 25, // 字幕背景の下端からの位置
    left: 40, // 字幕背景の左端からの位置
    backgroundImage: 'image/Cyber_telop2_black.png', // 字幕背景の画像パス
    backgroundPosition: 'center', // 字幕背景画像の表示位置
    display: 'flex', // 字幕背景の表示形式
    alignItems: 'center', // 字幕背景内のアイテムの垂直方向の配置
    justifyContent: 'center', // 字幕背景内のアイテムの水平方向の配置
  },

  // CharacterVideo のルートスタイル
  videoBackground: { // 動画全体の背景スタイル
    backgroundColor: '#000', // 背景色
    backgroundImage: 'image/background.png', // 背景画像パス
    backgroundSize: 'cover', // 背景画像のサイズ調整方法
    backgroundPosition: 'center', // 背景画像の表示位置
  },
  // CharacterVideo の背景動画オーバーレイのスタイル
  videoOverlay: { // 背景動画の上に重ねるオーバーレイのスタイル
    width: '100%', // オーバーレイの幅
    height: '100%', // オーバーレイの高さ
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // オーバーレイの背景色 (半透明の黒)
    backdropFilter: 'blur(4px)', // オーバーレイの背景のぼかし効果
  },

  // スライド関連設定
  slideTop: 0, // スライドの上端からの位置 (ピクセル)
  slideLeft: 40, // スライドの左端からの位置 (ピクセル)
  slideHeight: 'calc(100% - 110px)', // スライドの高さ
  slideWidth: 'calc(85% - 80px)', // スライドの幅

  // CharacterVideo のVOICEVOXクレジットスタイル
  voicevoxCreditStyle: { // VOICEVOXクレジットのスタイル
    position: 'absolute', // 絶対位置指定
    bottom: 20, // 下端からの位置
    right: 20, // 右端からの位置
    top: 'auto', // 上端の位置 (自動)
    left: 'auto', // 左端の位置 (自動)
    color: '#fff', // 文字色
    fontSize: '20px', // フォントサイズ
    fontFamily: 'sans-serif', // フォントファミリー
    fontWeight: 'bold', // フォントウェイト
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // 文字の影
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景色 (半透明の黒)
    padding: '8px 12px', // パディング
    borderRadius: '4px', // 角丸の半径
  },
} as const;

export const zIndex = {
  anyValue: 1, // その他の要素のz-index
  subtitle: 10, // 字幕のz-index
  character: 10, // キャラクターのz-index
  transitionMovie: 10000, // トランジション動画のz-index
} as const;
