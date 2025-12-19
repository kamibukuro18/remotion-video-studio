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
          "id": "2260c2d7f7434a22990b788485c4ad18",
          "audioDurationFrames": 268,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
          "id": "9a1ad27e96804b60a02157efdfe37090",
          "audioDurationFrames": 190,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
          "id": "ad87b5db51e44a0b995f3bf2c41dd014",
          "audioDurationFrames": 231,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
          "id": "3629bbb006954c049de1c4831c3ba5fd",
          "audioDurationFrames": 292,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
          "id": "697f76643a6f475fb1203dc9b61519e8",
          "audioDurationFrames": 251,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "これは宇宙全体が膨張している証拠なんですね。",
          "id": "0ee23e6fab5f47a1a0abf21915b60781",
          "audioDurationFrames": 117,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ここでビッグバンとは何かを簡単に整理します。",
          "id": "e6726744f2f44167856d96519f33ff5a",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
          "id": "59e623a0b8124406b7b1d1a0e5f9257d",
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
          "id": "a711cfa7b6994904804df560f1ab30d7",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
          "id": "0cb5108a6d1544e1948671b5fbaad49f",
          "audioDurationFrames": 255,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "宇宙誕生からの流れは大きく3つのステップに分けられます。",
          "id": "457f5a72841a4631a247f52587137572",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
          "id": "97117ff66b1d4d3cadc7b543c315564a",
          "audioDurationFrames": 331,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
          "id": "f573f94691464cf4bea0dd07a8d871c1",
          "audioDurationFrames": 253,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
          "id": "8da1f44488e34b219de4fb8b4832d67a",
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
          "id": "03137d6352b347fe8ea81e3b59e6cb35",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
          "id": "1e78cd7cd0704f8098329202f410240b",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
          "id": "01c5b84549ab4248b976a7e82f677c15",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
          "id": "8bdc06088bbf4862976b68aec5845cb6",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "ビッグバン理論には代表的な3つの証拠があります。",
          "id": "59407c6d7a1b4d3aa5b45c925736ff77",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
          "id": "59c36c0bd81043cab97074221d6c1a4c",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
          "id": "62828568a3d541e08d60431fdade9591",
          "audioDurationFrames": 228,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
          "id": "646440b556a94e40b5faa74bda546dd6",
          "audioDurationFrames": 184,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
          "id": "cbffe68f91a74f32aaa62f7a42865257",
          "audioDurationFrames": 168,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
          "id": "7000975a585247f0bb253cb668d04642",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
          "id": "f5fd7cb2e79d4e46bc3fbdfc3525c140",
          "audioDurationFrames": 162,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
          "id": "d27b483a63014e9c917a6fd0b8707895",
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
