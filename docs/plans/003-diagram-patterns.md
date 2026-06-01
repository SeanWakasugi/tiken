# 003 図解パターン集の初期実装

## 目的

よく使う図解を再利用できるコンポーネントとして整備し、スライド作成時の品質と速度を上げる。

## 対象範囲

- `src/components/`
- `src/pages/patterns/`
- `src/styles/global.css`
- `src/styles/slide.css`
- `docs/content-guidelines.md`

## 作業

1. 図解パターンを3種類選ぶ
   - フロー図
   - 比較図
   - レイヤー図
2. 各パターンを Astro コンポーネントとして実装する
3. `/patterns/` に表示サンプルを追加する
4. 各パターンの用途、使うべき場面、避けるべき場面を docs に追記する
5. サンプルスライドに1つ以上の図解コンポーネントを適用する

## 完了条件

- `/patterns/` で3種類の図解を確認できる
- 各図解がPC幅で崩れない
- `npm run build` が成功する

## 検証コマンド

```bash
npm run build
npm run dev
```

## 成果物

- 図解コンポーネント
- 図解パターンページ
- 図解利用ガイドの追記

## 次のセッション

[004 ChatGPT制作テンプレートのサイト反映](004-chatgpt-templates.md) に進む。
