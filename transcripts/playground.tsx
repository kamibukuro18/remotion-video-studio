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
    text: "みなさんこんにちは。今回は「江戸時代の生活」について解説します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 1
  },
  {
    text: "特に、将軍や武士ではなく、庶民の暮らしに注目して見ていきましょう。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 1
  },
  {
    text: "江戸時代は約260年続いた、比較的平和な時代です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "この長い安定が、庶民の生活文化を大きく発展させました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "時代の全体像を地図や年表で見ると分かりやすいです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 2
  },
  {
    text: "庶民の多くは長屋と呼ばれる集合住宅に住んでいました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 3
  },
  {
    text: "図で表すと、一つの建物を壁で区切ったシンプルな構造です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 3
  },
  {
    text: "台所や井戸、トイレは共同で使うのが特徴でした。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 3
  },
  {
    text: "江戸時代の庶民の主食は白米や雑穀でした。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4
  },
  {
    text: "おかずは味噌汁、漬物、魚が中心です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4
  },
  {
    text: "食事の内容をイラストで見ると、とても質素なのが分かります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 4
  },
  {
    text: "庶民の仕事は大きく3つに分けられます。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 5
  },
  {
    text: "農民、職人、商人の3つです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 5
  },
  {
    text: "この役割分担を関係図として見ると、社会の仕組みが理解しやすいです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 5
  },
  {
    text: "庶民にも楽しみはたくさんありました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 6
  },
  {
    text: "芝居、相撲、祭りなどが人気です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 6
  },
  {
    text: "当時の町のにぎわいをイラストで示すと、活気が伝わります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 6
  },
  {
    text: "江戸時代の生活は日の出と日の入りが基準でした。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 7
  },
  {
    text: "夜はろうそくを使うため、早寝早起きが基本です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 7
  },
  {
    text: "1日の流れを図解で確認すると分かりやすいです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 7
  },
  {
    text: "江戸時代の庶民は、質素ですが工夫しながら暮らしていました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 8
  },
  {
    text: "平和な時代だからこそ、文化や娯楽が発展したのです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 8
  },
  {
    text: "当時の生活を知ることで、日本の文化の原点が見えてきます。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 8
  }
];

// ==================== EDITABLE SECTION END ====================

// ==================== GENERATED SECTION START ====================

// This section is auto-generated. Do not edit directly.
// Audio generation: npx ts-node scripts/generateCharacterVoiceFiles.ts

export const PlaygroundConfig: VideoConfig = {
  "sections": [
    {
      "title": "Playground",
      "fromFramesMap": {
        "0": 30,
        "1": 185,
        "2": 336,
        "3": 471,
        "4": 604,
        "5": 720,
        "6": 834,
        "7": 963,
        "8": 1084,
        "9": 1181,
        "10": 1289,
        "11": 1418,
        "12": 1504,
        "13": 1594,
        "14": 1750,
        "15": 1825,
        "16": 1917,
        "17": 2047,
        "18": 2144,
        "19": 2252,
        "20": 2361,
        "21": 2481,
        "22": 2600
      },
      "talks": [
        {
          "text": "みなさんこんにちは。今回は「江戸時代の生活」について解説します。",
          "id": "83fcf80b68b040fcb17c70789ed86aa6",
          "audioDurationFrames": 146,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "特に、将軍や武士ではなく、庶民の暮らしに注目して見ていきましょう。",
          "id": "e7df1723605743af9d3e7b319faf7d38",
          "audioDurationFrames": 136,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "江戸時代は約260年続いた、比較的平和な時代です。",
          "id": "4af6ecb99de84f579371e773921a4816",
          "audioDurationFrames": 126,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "この長い安定が、庶民の生活文化を大きく発展させました。",
          "id": "9441745b63fe42328ad252671aa7dcdb",
          "audioDurationFrames": 124,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "時代の全体像を地図や年表で見ると分かりやすいです。",
          "id": "c0deb22fd3364daebe3ff1dc0f4b3606",
          "audioDurationFrames": 101,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "庶民の多くは長屋と呼ばれる集合住宅に住んでいました。",
          "id": "af54a28b351543d68a4826caed7a9f45",
          "audioDurationFrames": 105,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "図で表すと、一つの建物を壁で区切ったシンプルな構造です。",
          "id": "550b7b9e420e4dd48e023f956569853d",
          "audioDurationFrames": 120,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "台所や井戸、トイレは共同で使うのが特徴でした。",
          "id": "c7bc65d8df6644d7a33eeba47dcc0fb7",
          "audioDurationFrames": 106,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "江戸時代の庶民の主食は白米や雑穀でした。",
          "id": "06070b0c2d3149b284c12b1d060b009b",
          "audioDurationFrames": 88,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "おかずは味噌汁、漬物、魚が中心です。",
          "id": "24b5f23666244b05913c50e442f16d8f",
          "audioDurationFrames": 99,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "食事の内容をイラストで見ると、とても質素なのが分かります。",
          "id": "c43999daeb0347a18cf7f8365e9b9894",
          "audioDurationFrames": 114,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "庶民の仕事は大きく3つに分けられます。",
          "id": "d210f47ba75b49afa475c98c0e5d2445",
          "audioDurationFrames": 77,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "農民、職人、商人の3つです。",
          "id": "afcc4ed5b17648529ccc5e43aac25202",
          "audioDurationFrames": 81,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "この役割分担を関係図として見ると、社会の仕組みが理解しやすいです。",
          "id": "5266feb4fbcb4eb6853143a213dd9761",
          "audioDurationFrames": 141,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "庶民にも楽しみはたくさんありました。",
          "id": "83893a59e0f646b7910211608f1624f0",
          "audioDurationFrames": 66,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "芝居、相撲、祭りなどが人気です。",
          "id": "023e99aaea404c25a21a09991f80c716",
          "audioDurationFrames": 83,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "当時の町のにぎわいをイラストで示すと、活気が伝わります。",
          "id": "0eb2e9cb87a4425f8405db2dc416c858",
          "audioDurationFrames": 115,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "江戸時代の生活は日の出と日の入りが基準でした。",
          "id": "e19ab172135648f4a126f89306acc5e3",
          "audioDurationFrames": 88,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "夜はろうそくを使うため、早寝早起きが基本です。",
          "id": "66dad47c217d4baab7e22f3078937074",
          "audioDurationFrames": 99,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "1日の流れを図解で確認すると分かりやすいです。",
          "id": "6d15ef5e1f914205b98ddfa919e766ba",
          "audioDurationFrames": 94,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "江戸時代の庶民は、質素ですが工夫しながら暮らしていました。",
          "id": "fe7f0984345f4781a1e6edc0c5cc29b7",
          "audioDurationFrames": 111,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "平和な時代だからこそ、文化や娯楽が発展したのです。",
          "id": "ab97422d846241a4979690b3fae33b03",
          "audioDurationFrames": 110,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "当時の生活を知ることで、日本の文化の原点が見えてきます。",
          "id": "2115ca90fb154cfb953e56d3478dfdfe",
          "audioDurationFrames": 123,
          "image": {
            "src": "/slides/8.png"
          }
        }
      ],
      "totalFrames": 2798,
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
