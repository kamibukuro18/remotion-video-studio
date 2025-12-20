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
          "id": "d0efeaa833f64b3aa6c70e9b0092bcda",
          "audioDurationFrames": 268,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "まずは宇宙がどのように始まったのか、その全体像を図でざっくり見ていきましょう。",
          "id": "8faccac5b28d4102877917775754446d",
          "audioDurationFrames": 190,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "宇宙の始まりについてはさまざまな仮説がありますが、現在もっとも有力なのがビッグバン理論です。",
          "id": "e44d7bc4419f483e988c691f341c7b21",
          "audioDurationFrames": 231,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この理論を関係図として整理すると、誕生 → 膨張 → 冷却 → 星と銀河の形成、という流れになります。",
          "id": "1aa2f8710e8b411fb9174ef472434c45",
          "audioDurationFrames": 292,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "実際の観測データをスクリーンショット風に見てみると、遠くの銀河ほど速く遠ざかっていることがわかります。",
          "id": "a97bd39aed1b4a868903105253720442",
          "audioDurationFrames": 251,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "これは宇宙全体が膨張している証拠なんですね。",
          "id": "c448dade2a8141b1857edae267e33079",
          "audioDurationFrames": 117,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ここでビッグバンとは何かを簡単に整理します。",
          "id": "a56d608dd2b845e8bb578a792dcd22d5",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "イラストで示すと、「ものすごく高温高密度な一点から一気に膨張した」状態がスタートです。",
          "id": "acd2d9a89251423b92b40f33dd17aa43",
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
          "id": "7ccabc42fd94497099cacc4909d916fb",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この構造を視覚的に見ると、風船が膨らむように「空間が伸びる」という形で説明できます。",
          "id": "620cea5b35494105bc9c633264d44b31",
          "audioDurationFrames": 255,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "宇宙誕生からの流れは大きく3つのステップに分けられます。",
          "id": "51744dda3ec74b819a88b0804a89ba6a",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "第一に「急膨張(インフレーション)」、第二に「冷却と物質の誕生」、第三に「星と銀河の形成」です。",
          "id": "8aadcbf8e03746a596233ff6157a661d",
          "audioDurationFrames": 331,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "まずインフレーションについて。ここは図解で確認すると、一瞬で宇宙が桁違いに大きくなるプロセスです。",
          "id": "09a676ee273e45a0a058d8b5aa131518",
          "audioDurationFrames": 253,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ほんの0.000…1秒の間に、宇宙はとてつもなく膨張しました。",
          "id": "c213f6f927be4ab8a3157ee7edc650ff",
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
          "id": "d634d9d493ee40a58f76d6b02aeac831",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この過程を関係図として見ると、温度低下 → 粒子結合 → 原子形成、という流れになります。",
          "id": "3e0a28e97f1241ad963bb1737307b2d1",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "そして星と銀河の形成。ガスが集まり、重力によって星が生まれ、さらに集まって銀河になります。",
          "id": "c5d3a8f7beb648db812f8d56cf688521",
          "audioDurationFrames": 260,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "イラストで表すと、ガスが雲のようにまとまり、光る星が点々と生まれていくイメージです。",
          "id": "c316d61763e842a780482a386a268864",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "ビッグバン理論には代表的な3つの証拠があります。",
          "id": "12f525886b4846b5bde4ce2893945049",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "「宇宙の膨張」「宇宙背景放射」「元素の割合」の3つです。",
          "id": "12ad944f29a64eb6998019e920bfa75e",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "宇宙背景放射は、宇宙全体に広がる微弱な電波で、ビッグバンの残り火のようなもの。",
          "id": "667035e73b7043bfb72b5ac78211ca01",
          "audioDurationFrames": 228,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "実際の観測画面を見ると、微妙な温度差が色分けされて表示されます。",
          "id": "3b91e325c67241e08872a736ae76a6fe",
          "audioDurationFrames": 184,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "今日はビッグバン理論を、図解やイラストを交えながら整理してきました。",
          "id": "adfedd924e914d95af7a981870b87851",
          "audioDurationFrames": 168,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "宇宙は一点から始まり、膨張し続け、今も広がり続けています。",
          "id": "8a00805a397b49b4b4acc62e7bfc1825",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "この壮大なテーマは、まだまだ解明されていない謎も多い分野です。",
          "id": "28858633fa4c48bc9284afcebc68e381",
          "audioDurationFrames": 162,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "今後の観測技術の進歩によって、宇宙の本当の始まりにさらに近づくかもしれません。",
          "id": "edb29cccbcc649229d00cfa3a458a906",
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
