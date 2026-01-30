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
    text: "今回は「GitHubとは何か」を、中学生でも理解できるレベルで解説します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 1
  },
  {
    text: "プログラミングをこれから学ぶ人にも役立つ内容です。",
    delayForNextTalkInSeconds: 0.5
  },
  {
    text: "GitHubは、プログラムのコードをインターネット上で管理するサービスです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "フロー図で表すと、オンライン上にある共有ノートのような存在です。",
    delayForNextTalkInSeconds: 0.5
  },
  {
    text: "管理するのは「ソースコード」と呼ばれる、プログラムの設計図です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 3
  },
  {
    text: "イラストで示すと、アプリやゲームを作るためのレシピ集のイメージです。",
    delayForNextTalkInSeconds: 0.5
  },
  {
    text: "GitHubを使う理由は、大きく3つあります。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
  },
  {
    text: "第一に、変更した履歴を残せること。",
    delayForNextTalkInSeconds: 0.1
  },
  {
    text: "第二に、間違えたら前の状態に戻せること。",
    delayForNextTalkInSeconds: 0.1
  },
  {
    text: "第三に、複数人で同時に開発できることです。",
    delayForNextTalkInSeconds: 0.5
  },
  {
    text: "GitHubは、コードを安全に保存し、成長させていくための場所です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 5
  },
  {
    text: "全体の仕組みを図にすると、時間と人がつながる管理システムになります。",
    delayForNextTalkInSeconds: 0.5,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
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
        "1": 219,
        "2": 331,
        "3": 470,
        "4": 612,
        "5": 756,
        "6": 893,
        "7": 995,
        "8": 1084,
        "9": 1183,
        "10": 1299,
        "11": 1447
      },
      "talks": [
        {
          "text": "今回は「GitHubとは何か」を、中学生でも理解できるレベルで解説します。",
          "id": "84607f08146e4c6f815c86df5bf42ddf",
          "audioDurationFrames": 180,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "プログラミングをこれから学ぶ人にも役立つ内容です。",
          "id": "207ec011c08247d9af15f0d35c694921",
          "audioDurationFrames": 97,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "GitHubは、プログラムのコードをインターネット上で管理するサービスです。",
          "id": "5fd7dccfb909401ba0a4f40aa43924b7",
          "audioDurationFrames": 130,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "フロー図で表すと、オンライン上にある共有ノートのような存在です。",
          "id": "392797d5742e4843b0e0c6d0f90d0ec2",
          "audioDurationFrames": 127,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "管理するのは「ソースコード」と呼ばれる、プログラムの設計図です。",
          "id": "bd2a4610538b4e89b63c650cc2d38ca9",
          "audioDurationFrames": 135,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "イラストで示すと、アプリやゲームを作るためのレシピ集のイメージです。",
          "id": "a0facd0eb9f0400fb30c0fee6d764854",
          "audioDurationFrames": 122,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "GitHubを使う理由は、大きく3つあります。",
          "id": "55b8e840c29d4ae38cd201d93dcc630e",
          "audioDurationFrames": 93,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/4.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "第一に、変更した履歴を残せること。",
          "id": "4ebb6a572d084fb7a1e67b7234b27c7d",
          "audioDurationFrames": 86,
          "image": {
            "src": "/slides/4.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "第二に、間違えたら前の状態に戻せること。",
          "id": "044f8aa3e2e142de9179ed3344cd8f14",
          "audioDurationFrames": 96,
          "image": {
            "src": "/slides/4.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "第三に、複数人で同時に開発できることです。",
          "id": "2369984749e642939fa8fc09e59afcea",
          "audioDurationFrames": 101,
          "image": {
            "src": "/slides/4.mp4",
            "durationInFrames": 150
          }
        },
        {
          "text": "GitHubは、コードを安全に保存し、成長させていくための場所です。",
          "id": "25c4248472c142529ff3bfb0ca492e6d",
          "audioDurationFrames": 139,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "全体の仕組みを図にすると、時間と人がつながる管理システムになります。",
          "id": "fa19fba615f54377a992a0b169d67915",
          "audioDurationFrames": 136,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/5.png"
          }
        }
      ],
      "totalFrames": 1658,
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
