# アーキテクチャ

## 基本構成

tiken は Astro の静的サイトとして構築します。スライド、ドキュメント、図解パターンを同じプロジェクトに置き、GitHub Pagesへ静的ファイルとして公開します。

```text
tiken/
  README.md
  package.json
  astro.config.mjs
  tsconfig.json
  docs/
    plans/
  src/
    pages/
      index.astro
      slides/
      docs/
      patterns/
    components/
    layouts/
    styles/
  public/
    assets/
  .github/
    workflows/
      deploy.yml
```

## 公開ページ

- `/`: トップページ
- `/slides/`: スライド一覧
- `/slides/<slug>/`: 各スライド
- `/slides/<slug>/script/`: Astroが生成する発表用スクリプトページ
- `/docs/`: サイト上のドキュメント入口
- `/patterns/`: 図解パターン集

GitHub Pages の project pages を前提に、`astro.config.mjs` の `base` は `/tiken` にしています。

## スライド単位の構造

```text
src/pages/slides/<slug>/
  index.astro   # reveal.js を使ったスライド本体
  script.md     # 発表用スクリプト
```

スライド本体には、表示する結論、短い文、図解、最低限の補足だけを置きます。背景説明、具体例、話す順番、補足は `script.md` に分離します。

スライド一覧は `src/lib/slides.ts` が `src/pages/slides/*/index.astro` をビルド時に自動収集します。トップページと `/slides/` は同じ一覧データを使うため、新しいスライドを追加しても一覧ページを手で更新しません。

一覧で使うメタデータ:

- タイトル: 各スライドページの `<title>` から `| tiken` を除いた文字列
- 説明文: 最初の `.deck-lead`
- URL: `src/pages/slides/<slug>/index.astro` の `<slug>`

## reveal.js の既定設定

各スライドの `new Reveal(...)` は次の基準で初期化します。

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

`1920x1400` は reveal.js 標準の `960x700` と同じアスペクト比を保った 2 倍解像度です。Retina など高密度ディスプレイで文字がぼけにくいように、このサイズを既定にします。

`src/styles/slide.css` はこの 2 倍基準に合わせています。通常の HTML/CSS レイアウトで使う `px` や `vw` は 2 倍基準で指定します。一方、SVG の `viewBox` 内部座標に属する `rect width`、`height`、`rx`、`text font-size`、`stroke-width` などは `viewBox` の座標系に対する値なので、2 倍化しません。SVG 全体の表示サイズだけを CSS で調整します。

## コンポーネント方針

- `src/layouts/`: ページ全体の枠組み
- `src/components/`: 再利用できるUIや図解
- `src/lib/slides.ts`: スライド一覧の自動収集
- `src/styles/global.css`: 通常ページの共通スタイル
- `src/styles/slide.css`: reveal.jsスライド用スタイル

図解は、まず SVG と CSS で実装します。状態管理や操作が必要なものだけ TypeScript を使います。

## デザイン方針

- 余白を広く取る
- 見出しを強く、本文を短くする
- 1画面に載せる要素は3から7個を目安にする
- 強調色は1スライドにつき1から2色に絞る
- アニメーションは意味がある場合だけ使う

## ビルドと公開

ローカル:

```bash
npm run dev
npm run build
```

公開:

1. `main` にマージまたは push
2. GitHub Actions が `npm ci` と `npm run build` を実行
3. `dist` を GitHub Pages にデプロイ

## 今後の拡張方針

- MDXベースの補足記事を追加する
- 図解コンポーネントをパターン化する
- スライドテンプレート生成スクリプトを追加する
- PDF出力手順を整備する
- リンクチェックやアクセシビリティチェックをCIに追加する
