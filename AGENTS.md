# AGENTS.md

## 新しいスライドを作る時に見るもの

まず次の順で確認してください。

1. `README.md` の「新しいスライドの作り方」
2. `docs/local-development.md` の「新しいスライドを追加する手順」と「スライド表示の既定値」
3. `docs/content-guidelines.md`
4. `docs/review-checklist.md`

## 実装ルール

- スライドは `src/pages/slides/<slug>/index.astro` と `script.md` のセットで追加する。
- トップページや `/slides/` に手動リンクを追加しない。`src/lib/slides.ts` が自動収集する。
- 一覧のタイトルは `<title>`、説明文は最初の `.deck-lead` から取得される。
- reveal.js の既定サイズは `1920x1400`。標準 `960x700` と同じアスペクト比の 2 倍解像度として扱う。
- `src/styles/slide.css` は 2 倍基準。通常の HTML/CSS の寸法と文字サイズはこの基準で指定する。
- SVG の `viewBox` 内部座標に属する図形サイズ、文字サイズ、線幅は 2 倍化しない。SVG 全体の表示サイズだけを調整する。
- 変更後は `npm run build` を実行する。
