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
- スライド一覧データ: `src/lib/slides.ts`
- サンプルスライド: `src/pages/slides/ai-slide-workflow/index.astro`
- 発表用スクリプト: `src/pages/slides/ai-slide-workflow/script.md`
- 通常ページCSS: `src/styles/global.css`
- スライドCSS: `src/styles/slide.css`

## 新しいスライドを追加する手順

1. `src/pages/slides/<slug>/` を作る
2. `index.astro` に reveal.js のスライドを実装する
3. `script.md` に発表用スクリプトを書く
4. `<title>` に一覧で使うタイトルを書く
5. タイトルスライドなどの最初の `.deck-lead` に一覧で使う説明文を書く
6. `npm run build` で確認する
7. `docs/review-checklist.md` を通す

トップページと `/slides/` の一覧は `src/lib/slides.ts` が自動生成します。`src/pages/slides/<slug>/index.astro` を追加すれば一覧に出るため、一覧ページへの手動リンク追加はしません。

## スライド表示の既定値

reveal.js は `1920x1400` を既定にします。これは標準の `960x700` と同じ比率の 2 倍解像度です。

```ts
const deck = new Reveal({
  width: 1920,
  height: 1400,
  margin: 0.04,
  hash: true,
  controls: true,
  progress: true,
  center: true,
  transition: 'fade'
});
```

`src/styles/slide.css` はこの 2 倍基準に合わせています。通常の HTML 要素の余白、幅、フォントサイズは 2 倍基準で指定します。SVG の `viewBox` 内部で使う図形サイズ、テキストサイズ、線幅は `viewBox` の座標系に対する値なので、2 倍化しません。

## 注意点

- GitHub Pages の project pages 前提なので、リンクには `import.meta.env.BASE_URL` を使う
- 内部情報、顧客情報、未公開情報をサンプルに入れない
- 画像やフォントを追加する場合はライセンスを確認する
- スライドに長文を入れず、スクリプトへ分離する
