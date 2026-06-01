# ローカル開発環境

## 前提

- Node.js 22系
- npm 10系
- Git

現在のリポジトリは Astro + reveal.js の最小構成です。

## 初期セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

標準では `http://localhost:4321/tiken/` で確認します。

## ビルド

```bash
npm run build
```

このコマンドは `astro check` と `astro build` を実行します。

## プレビュー

```bash
npm run preview
```

本番ビルド後の `dist` を確認します。

## よく触るファイル

- トップページ: `src/pages/index.astro`
- スライド一覧: `src/pages/slides/index.astro`
- サンプルスライド: `src/pages/slides/ai-slide-workflow/index.astro`
- 発表用スクリプト: `src/pages/slides/ai-slide-workflow/script.md`
- 通常ページCSS: `src/styles/global.css`
- スライドCSS: `src/styles/slide.css`

## 新しいスライドを追加する手順

1. `src/pages/slides/<slug>/` を作る
2. `index.astro` に reveal.js のスライドを実装する
3. `script.md` に発表用スクリプトを書く
4. `src/pages/slides/index.astro` にリンクを追加する
5. `npm run build` で確認する
6. `docs/review-checklist.md` を通す

## 注意点

- GitHub Pages の project pages 前提なので、リンクには `import.meta.env.BASE_URL` を使う
- 内部情報、顧客情報、未公開情報をサンプルに入れない
- 画像やフォントを追加する場合はライセンスを確認する
- スライドに長文を入れず、スクリプトへ分離する
