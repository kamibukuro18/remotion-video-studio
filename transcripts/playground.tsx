import { VideoConfig } from '../src/yukkuri/yukkuriVideoConfig';

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
// 音声生成: npx ts-node scripts/generateYukkuriVoiceFiles.ts

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
          "id": "f4a64c8530de4912be91ec8d548ffaa6",
          "audioDurationFrames": 268,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
          "id": "5388e04f938e4ff98d30c4d9a76c0b16",
          "audioDurationFrames": 190,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
          "id": "cada0760e6a242e187904019cbd0b218",
          "audioDurationFrames": 231,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
          "id": "241c273101df4ef4a20500dd3e11b12f",
          "audioDurationFrames": 292,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
          "id": "1d11ff74e7bc4e7fb40df9d5b7041ee3",
          "audioDurationFrames": 251,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "これは宇宙全体が膨張している証拠なんですね。",
          "id": "c80981b2876d4c14bda11fd44b763aec",
          "audioDurationFrames": 117,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ここでビッグバンとは何かを簡単に整理します。",
          "id": "f1c314a0148f422088136113a70b95fd",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
          "id": "9425dc353c5a429c8f933f6ad5d80df5",
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
          "id": "c877bfce207a4a1e886d493c3241310c",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
          "id": "698943fc072e4ed9afb945657247c806",
          "audioDurationFrames": 255,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "宇宙誕生からの流れは大きく3つのステップに分けられます。",
          "id": "efad92671a1e4a4a82886ccac5824698",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
          "id": "ba5f6ae8896b4e85a3e8523f08cdd8fc",
          "audioDurationFrames": 331,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
          "id": "2795651ef6974663915f8c9fd99b5eff",
          "audioDurationFrames": 253,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
          "id": "4380630fb20d4b3383099d5dee9c9783",
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
          "id": "b1a58aece49d4d319ab81fae440d7922",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
          "id": "eeff45c7e00544139532526cee7a042e",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
          "id": "060b24a10e55402fad66af2c543b34cd",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
          "id": "23ad2b6050eb4059879629fdf4020117",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "ビッグバン理論には代表的な3つの証拠があります。",
          "id": "1601b4b2ba364e4eb8aa4e12d892d7c2",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
          "id": "baaa13d30f454afe917bd802406dae36",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
          "id": "e4b3dbab61824096a5bb57c070dbc31e",
          "audioDurationFrames": 228,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
          "id": "6541cdd29ade4b80b97a935d646dc87c",
          "audioDurationFrames": 184,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
          "id": "38250955bc1b43a4a5b36cf2b27799da",
          "audioDurationFrames": 168,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
          "id": "25470c01600a46ccb21e73effd7f5736",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
          "id": "ae2e4cb6a1514f4a9a9155c9d56989d3",
          "audioDurationFrames": 162,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
          "id": "91914f0ebe6d468486bf6e15ec1998be",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/13.png"
          }
        }
      ],
      "totalFrames": 5782,
      "kuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "reimuKuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "marisaKuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "beforeMovieFrames": 0,
      "afterMovieFrames": 0
    }
  ]
};

// ==================== GENERATED SECTION END ====================
