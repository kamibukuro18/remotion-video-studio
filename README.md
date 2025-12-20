/// <summary>
/// Remotionで作成するゆっくり実況動画プロジェクト
/// </summary>

このプロジェクトは、RemotionフレームワークとVoicevoxを使用して、テキストデータからゆっくり実況動画を生成することを目的としています。ユーザーはスクリプトを記述し、キャラクターアニメーション（まばたき、口パク）、BGM、効果音、スライド画像を組み合わせて、リッチな動画コンテンツを簡単に作成できます。

## 目的

*   プログラミングによる動画制作の効率化。
*   テキストベースの入力から高品質なゆっくり実況動画を自動生成。
*   カスタマイズ可能なキャラクターアニメーションとUI要素の提供。
*   Remotion v4への対応と、モダンな開発環境の維持。

## 用途

*   YouTubeなどの動画プラットフォーム向けに、技術解説、ゲーム実況、ニュース解説などのゆっくり実況動画を制作。
*   プレゼンテーション資料を動画形式で表現。
*   物語やシナリオをキャラクターと音声で表現するコンテンツ作成。

## 使い方

### 1. 依存関係のインストール

初めてプロジェクトを開始する際や、新しい依存関係が追加された場合は、以下のコマンドを実行して必要なパッケージをインストールしてください。

```console
npm i
```

### 2. Voicevoxエンジンの起動

ゆっくり音声を生成するためには、Voicevoxエンジンをローカルで起動しておく必要があります。Voicevoxアプリケーションを起動し、音声合成サーバーを有効にしてください。

### 3. ゆっくり音声ファイルの生成

`transcripts/playground.tsx` ファイルに記述されたテキストデータに基づいて、ゆっくり音声ファイルを生成します。

```console
npm run gen-voice
```

開発中に `transcripts/playground.tsx` の変更を監視し、ファイルが保存されるたびに自動で音声生成を行うには、以下のウォッチモードコマンドを使用します。

```console
npm run gen-voice:watch
```

### 4. プレビューの開始

Remotionのプレビューサーバーを起動し、ブラウザで動画をリアルタイムで確認します。

```console
npm start
```

### 5. 動画のレンダリング

最終的な動画ファイルを生成するには、以下のコマンドを実行します。

```console
npm run build
```

## 設定値のリファクタリングガイド

このセクションでは、Remotion動画の設定値がどのファイルに記述されており、何を調整すれば動画のどの部分に影響するかを説明します。

---

### 1. プロジェクト共通設定 (`src/constants.ts`)

`src/constants.ts` は、動画全体の挙動や表示に関する**全て**の定数を定義する中心的なファイルです。
キャラクターの見た目（口パク、目の差分）、テロップの位置・フォント、スライドの位置、合成音声設定、背景・フレームなどの画像素材に関する設定がここに集約されています。
このファイルを編集することで、動画の様々な要素を柔軟に調整できます。
各設定項目には詳細なコメントが追加されており、その目的と影響範囲が説明されています。

主な設定カテゴリは以下の通りです。

*   **グローバルな動画設定**: `fps` (フレームレート), `talkGapFrames` (セリフ間の間隔), `defaultSectionInitialDelayFrames` (セクション開始遅延), `defaultSectionEndFrames` (セクション終了遅延), `videoTitle` (動画タイトル), `defaultVideoDurationFrames` (デフォルト動画長さ)
*   **BGM関連設定**: `defaultBgmSrc` (デフォルトBGMパス), `defaultBgmVolume` (デフォルトBGM音量)
*   **キャラクター関連設定**: キャラクターのサイズ、口や目の位置、まばたきアニメーションの閾値など。
*   **音声関連設定**: `voicevoxSpeakerId` (話者ID), `voicevoxSpeed` (話速)
*   **字幕関連設定**: 字幕の高さ、最大文字数、行の高さ、フォント、色、位置、パディングなど。
*   **字幕背景関連設定**: 字幕背景の幅、位置、画像パスなど。
*   **動画背景関連設定**: 動画全体の背景色、背景画像、オーバーレイなど。
*   **スライド関連設定**: スライドの位置とサイズ。
*   **VOICEVOXクレジットスタイル**: クレジットの表示位置、フォント、色など。
*   **`zIndex`**: 各要素の重なり順序。

**変更の影響**: これらの設定は、関連するRemotionコンポーネント (`CharacterVideo.tsx`, `CharacterSequence.tsx`, `CharacterFace.tsx`, `Subtitle/Subtitle.tsx`, `Subtitle/SubtitleBackground.tsx`, `character/Talk/index.tsx` など) で参照されており、値を変更することで動画の見た目や挙動に直接影響を与えます。

**BGM設定に関する注意点**:
BGMの音量やソースを変更する場合、`src/constants.ts` を編集し、Remotionプレビューを再起動するだけで変更が反映されます。**音声ファイルを再生成する必要はありません。**

---

### 2. コンテンツ定義 (`transcripts/playground.tsx`)

このファイルは、動画の具体的なコンテンツ（セリフ、スライド、効果音など）を定義します。

*   **`PLAYGROUND_TALKS` (Array of SimpleTalk)**
    *   **説明**: 各セリフのテキスト、次のセリフまでの遅延時間、表示する画像/動画 (`videoIndex`経由)、効果音などを定義します。
    *   **影響**:
        *   動画のストーリーとセリフの内容。
        *   セリフ間の間隔。
        *   セリフに合わせて表示される画像や動画。
        *   再生される効果音。
    *   **`videoIndex` の自動判別**:
        `videoIndex` に数字 (`1`, `2` など) を指定すると、`scripts/generateCharacterVoiceFiles.ts` が以下の優先順位でメディアファイルを自動的に判別します。
        1.  `public/slides/{videoIndex}.mp4` が存在すれば、動画として使用します。（`durationInFrames` は `VIDEO_SETTINGS.defaultVideoDurationFrames` が適用されます。）
        2.  `public/slides/{videoIndex}.mp4` が存在しない場合、`public/slides/{videoIndex}.png` が存在すれば、画像として使用します。
    *   **調整箇所**: `transcripts/playground.tsx` 内の `PLAYGROUND_TALKS` 定数。

---

### 3. 音声・動画ファイルの生成と更新 (`scripts/generateCharacterVoiceFiles.ts`)

このスクリプトは、`transcripts/playground.tsx` に記述されたテキストデータに基づいて、Voicevox音声ファイルや動画情報を生成し、`transcripts/playground.tsx` の `GENERATED SECTION` を更新します。

*   **コマンド**:
    *   `npm run gen-voice`: 音声ファイルを生成し、`playground.tsx` を更新します。
    *   `npm run gen-voice:watch`: `playground.tsx` の変更を監視し、保存時に自動で音声生成を行います。
*   **Forceオプション**:
    キャッシュを無視して全ての音声ファイルを強制的に再生成する場合、またはBGM設定の変更などを `GENERATED SECTION` に一度だけ反映させたい場合は、以下のコマンドを使用します。
    ```console
    npx ts-node scripts/generateCharacterVoiceFiles.ts force
    ```
*   **音声のカスタマイズ**: `src/constants.ts` の `voicevoxSpeakerId` と `voicevoxSpeed` を変更することで、話者や話速を調整できます。変更後に上記コマンドを実行してください。

---

### 4. プロジェクトのクリーニング

不要なキャッシュや生成ファイルを削除し、クリーンな状態に戻すためのコマンドです。

*   `npm run clean`: 音声キャッシュ (`transcripts/playground-audio-cache.json`) や生成された音声ファイル (`public/audio/character/`) を削除します。これにより、次回の音声生成が最初から行われます。

---

## 開発履歴と変更点

*   **`src/constants.ts` による一元的な設定管理**
    *   キャラクターの見た目（口パク、目の差分）、テロップの位置・フォント、スライドの位置、合成音声設定、背景・フレームなどの画像素材が `src/constants.ts` で設定可能になりました。
    *   各設定項目に詳細なコメントを追加し、可読性と変更の容易性を向上させました。
*   **BGMの音量・ソース設定の分離**
    *   BGMの音量やソースの変更が、音声ファイルの再生成なしに `src/constants.ts` の編集とRemotionプレビューの再起動で可能になりました。
    *   音声生成コマンドとBGM更新コマンドが完全に分離されました。
*   **動画 (MP4) の自動判別とインポート**
    *   `transcripts/playground.tsx` の `videoIndex` に数字を指定するだけで、`public/slides/` に対応する `.mp4` ファイルがあれば動画として、なければ `.png` ファイルとして自動的に読み込まれるようになりました。
*   **「yukkuri」から「character」への名称変更**
    *   プロジェクト全体で「yukkuri」という名称を「character」に変更し、ファイル名、ディレクトリ名、コード内の参照を更新しました。
*   **`config.ts` の削除**
    *   未使用の `config.ts` ファイルを削除しました。
