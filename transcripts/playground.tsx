import { VideoConfig } from '../src/character/characterVideoConfig';

// ==================== EDITABLE SECTION START ====================
// この部分を編集してください。音声生成スクリプトを実行すると、
// 下の GENERATED SECTION が自動的に更新されます。

export type SimpleTalk = {
  text: string;
  delayForNextTalkInSeconds: number;
  videoIndex?: number;
  seSounds?: { src: string }[];
};

export const PLAYGROUND_SETTINGS = {
  title: 'Playground',
  bgmSrc: '/audio/bgm/2_23_AM_2.mp3',
  bgmVolume: 0.05, // BGMの音量を調整 (例: 0.3)
};

export const PLAYGROUND_TALKS: SimpleTalk[] = [
  {
    text: "みなさんこんにちは。今日は「宇宙の誕生」をテーマに、ビッグバン理論を分かりやすく解説していきます。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 1
  },
  {
    text: "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 1
  },
  {
    text: "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 3
  },
  {
    text: "これは宇宙全体が膨張している証拠なんですね。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 3
  },
  {
    text: "ここでビッグバンとは何かを簡単に整理します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4
  },
  {
    text: "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
  },
  {
    text: "この膨張は爆発というより、空間そのものが広がるイメージです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 5
  },
  {
    text: "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 5
  },
  {
    text: "宇宙誕生からの流れは大きく3つのステップに分けられます。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 6
  },
  {
    text: "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 6
  },
  {
    text: "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 7
  },
  {
    text: "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 7,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
  },
  {
    text: "次に冷却の段階。温度が下がることで素粒子が結びつき、原子が誕生します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 8
  },
  {
    text: "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 8
  },
  {
    text: "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 9
  },
  {
    text: "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 9
  },
  {
    text: "ビッグバン理論には代表的な3つの証拠があります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 10
  },
  {
    text: "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 10
  },
  {
    text: "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 11
  },
  {
    text: "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 11
  },
  {
    text: "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 12
  },
  {
    text: "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 12
  },
  {
    text: "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 13
  },
  {
    text: "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 13
  }
];

// ==================== EDITABLE SECTION END ====================

// ==================== GENERATED SECTION START ====================

// この部分は自動生成されます。直接編集しないでください。
// 音声生成: npx ts-node scripts/generateCharacterVoiceFiles.ts

export const PlaygroundConfig: VideoConfig = {
  "sections": [
    {
      "title": "Playground",
      "bgmSrc": "/audio/bgm/2_23_AM_2.mp3",
      "bgmVolume": 0.05,
      "fromFramesMap": {
        "0": 30,
        "1": 307,
        "2": 512,
        "3": 752,
        "4": 1053,
        "5": 1313,
        "6": 1445,
        "7": 1565,
        "8": 1802,
        "9": 1974,
        "10": 2244,
        "11": 2392,
        "12": 2732,
        "13": 2994,
        "14": 3205,
        "15": 3426,
        "16": 3695,
        "17": 3964,
        "18": 4196,
        "19": 4329,
        "20": 4518,
        "21": 4755,
        "22": 4954,
        "23": 5131,
        "24": 5325,
        "25": 5496
      },
      "talks": [
        {
          "text": "みなさんこんにちは。今日は「宇宙の誕生」をテーマに、ビッグバン理論を分かりやすく解説していきます。",
          "id": "f791d02e179a428fa400e4dddc72cb3f",
          "audioDurationFrames": 268,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
          "id": "70cf62112285424c98bed2aec303fa14",
          "audioDurationFrames": 190,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
          "id": "d60f3e62619b4938b6e87235f0394a26",
          "audioDurationFrames": 231,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
          "id": "bbe93c3b81a04e39b2600474a09d4b73",
          "audioDurationFrames": 292,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
          "id": "ef63fa3209b1437ca929c40bbd153572",
          "audioDurationFrames": 251,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "これは宇宙全体が膨張している証拠なんですね。",
          "id": "50f129046140453896f2446d5552c844",
          "audioDurationFrames": 117,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ここでビッグバンとは何かを簡単に整理します。",
          "id": "c3afab588f5e420fad7b3badadacea70",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
          "id": "5e9b72532ddf44f890fa5505f159282d",
          "audioDurationFrames": 228,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "この膨張は爆発というより、空間そのものが広がるイメージです。",
          "id": "455a13baa11a4b7a90380ed3c5eb8f87",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
          "id": "74d83805946b4e07b6737611f041a60e",
          "audioDurationFrames": 255,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "宇宙誕生からの流れは大きく3つのステップに分けられます。",
          "id": "6c3691d824be4d57abba153eeb637fe6",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
          "id": "4ca1c42944424c35bbb13469087fd99b",
          "audioDurationFrames": 331,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
          "id": "196da6f19fd4474f872f4ec0453893aa",
          "audioDurationFrames": 253,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
          "id": "a16f1a3e956a4fdeb0f02efdbb186d26",
          "audioDurationFrames": 202,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "次に冷却の段階。温度が下がることで素粒子が結びつき、原子が誕生します。",
          "id": "22618ea650914abf932cabbf040a4241",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
          "id": "63a50e7abf7d47c9807cd38368dbea5c",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
          "id": "05c08a92b9c746ab926c65e3ed32d082",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
          "id": "ccf0a8aac2924980adc07f26bdcd300d",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "ビッグバン理論には代表的な3つの証拠があります。",
          "id": "90707d3fcfc7463c9d86ca0b9399bf83",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
          "id": "ad706ce3ff7f43609918889b61585c7c",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
          "id": "e3ffc22b62e448248450a2eb95875531",
          "audioDurationFrames": 228,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
          "id": "5f93e6ef351249cdbcf981b282e8e56e",
          "audioDurationFrames": 184,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
          "id": "01b02b29fff14381a1e01a10043046a3",
          "audioDurationFrames": 168,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
          "id": "35c1c07fa19b40d99df9eb2674e25c7c",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
          "id": "f74f3a9842c040f49d65ca0a90a9d225",
          "audioDurationFrames": 162,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
          "id": "052bbb256eed47619d4d462528a08864",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/13.png"
          }
        }
      ],
      "totalFrames": 5782,
      "characterLipSyncMap": {
        "frames": [],
        "amplitude": []
      },
      "reimuLipSyncMap": {
        "frames": [],
        "amplitude": []
      },
      "marisaLipSyncMap": {
        "frames": [],
        "amplitude": []
      },
      "beforeMovieFrames": 0,
      "afterMovieFrames": 0
    }
  ]
};

// ==================== GENERATED SECTION END ====================
