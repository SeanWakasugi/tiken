# tiken

HTML / CSS / SVG / JavaScript を使って、公開可能なスライド、発表用スクリプト、図解パターン、ナレッジを蓄積するための Astro ベースの静的サイトです。

## 目的

tiken は、文字を詰め込んだ資料ではなく、構造・関係性・変化・判断軸を視覚的に伝える HTML スライドを作り、GitHub Pages で公開・再利用できる形に整えることを目的にしています。

## ローカル実行

```bash
npm install
npm run dev
```

ビルド確認:

```bash
npm run build
```

## ディレクトリ構成

```text
docs/                  仕様、ガイド、運用ルール、実装計画
docs/plans/            1セッションで完了できる単位の作業計画
src/pages/             Astro の公開ページ
src/pages/slides/      HTMLスライドと発表用スクリプト
src/pages/docs/        公開サイト上のドキュメントページ
src/pages/patterns/    図解パターンのサンプル
src/components/        再利用コンポーネント
src/layouts/           ページレイアウト
src/styles/            グローバルCSS、スライドCSS、図解CSS
public/assets/         静的アセット
```

## 新しいスライドの作り方

1. `src/pages/slides/<slug>/index.astro` を作成する
2. 同じディレクトリに `script.md` を作成する
3. スライドは 1 枚 1 メッセージで構成する
4. 詳細説明は `script.md` に分離する
5. 公開前に [レビュー・公開チェックリスト](docs/review-checklist.md) を通す

## ドキュメント

- [プロジェクト仕様](docs/specification.md)
- [アーキテクチャ](docs/architecture.md)
- [ローカル開発環境](docs/local-development.md)
- [コンテンツ制作ガイド](docs/content-guidelines.md)
- [ChatGPT活用ワークフロー](docs/chatgpt-workflow.md)
- [公開運用](docs/publishing.md)
- [レビュー・公開チェックリスト](docs/review-checklist.md)
- [作業計画](docs/plans/README.md)

## 公開

公開URL:

```text
https://seanwakasugi.github.io/tiken/
```

`main` ブランチに push すると GitHub Actions が Astro をビルドし、GitHub Pages に公開します。初回設定中の `master` ブランチでも同じworkflowが動くようにしています。

GitHub Pages のプロジェクトページとして公開する前提で、`astro.config.mjs` の `base` は `/tiken` に設定しています。

## ライセンス

未定です。公開前にコンテンツとコードのライセンス方針を決めてください。
