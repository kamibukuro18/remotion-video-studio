import { VideoConfig } from '../src/character/characterVideoConfig';
import { VIDEO_SETTINGS } from '../src/constants';

// ==================== EDITABLE SECTION START ====================
// この部分を編集してください。音声生成スクリプトを実行すると、
// 下の GENERATED SECTION が自動的に更新されます。

export type SimpleTalk = {
  text: string;
  delayForNextTalkInSeconds: number;
  videoIndex?: number;
  seSounds?: { src: string }[];
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
          "id": "6a530541ff1342a5b2d6ef9d90b7ba2c",
          "audioDurationFrames": 268,
          "image": {
            "src": "/slides/1.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
          "id": "2490de694eec47b7a09166c2f0c7f142",
          "audioDurationFrames": 190,
          "image": {
            "src": "/slides/1.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
          "id": "6951729ecac84389abb363129c35990b",
          "audioDurationFrames": 231,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
          "id": "9ac467cfeff442f6b1281df02632e0cf",
          "audioDurationFrames": 292,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
          "id": "360d51bb8cf4439d9cd88d2902fddda4",
          "audioDurationFrames": 251,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "これは宇宙全体が膨張している証拠なんですね。",
          "id": "0a0d7cd15dd54637a6372d14cd1ed129",
          "audioDurationFrames": 117,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ここでビッグバンとは何かを簡単に整理します。",
          "id": "d4ba8a7f8bfc4057bbfe477551af2582",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
          "id": "9d21347175d24ff8bfe2a33d25d3dc86",
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
          "id": "8a3f56c127754535805745264637149b",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
          "id": "f7ca54d9f5f548538ef6008f0d7a7847",
          "audioDurationFrames": 255,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "宇宙誕生からの流れは大きく3つのステップに分けられます。",
          "id": "b5752b7726ef4a7390839c3086904e4e",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
          "id": "55aae41326964e3c9dcb185eae24bac9",
          "audioDurationFrames": 331,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
          "id": "b0e589e7e54049698a43e994c0e94369",
          "audioDurationFrames": 253,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
          "id": "35d0560eefa34baf887fdb539bbde487",
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
          "id": "b385e0b6b1fb49cdade5f0d7702bb2c5",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
          "id": "d5323440e6d94e0f8c285739bdbd76b1",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
          "id": "97e317969a2f4007a151ec458a4aba2e",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
          "id": "5039a29d245b4b9c877e0794e0ab04c2",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "ビッグバン理論には代表的な3つの証拠があります。",
          "id": "9aff14d7aaef42f8b18d1ba01d61ef0d",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
          "id": "eb4d7c2b320746c5b73bbd620245c8f5",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
          "id": "40081786e29b4e669b615693ac8249e3",
          "audioDurationFrames": 228,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
          "id": "9ef50c48bd9a4b9f83d16d41701722ac",
          "audioDurationFrames": 184,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
          "id": "4399dc89ed3141cfb7b8a3089646f87c",
          "audioDurationFrames": 168,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
          "id": "899dabbff27e4d8bb9adbc8a83c1067e",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
          "id": "dc7c5d6640c441f08f706ddaceebc537",
          "audioDurationFrames": 162,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
          "id": "afcbb68c18bf4b54a70bd54521f2ec8e",
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
