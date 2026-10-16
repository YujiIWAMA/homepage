# 岩間裕司のページ

静的HTMLサイト（ビルド不要）。GitHub → Cloudflare Pages で公開。

## ファイル構成

| ファイル | 役割 | 編集頻度 |
|---|---|---|
| `content.js` | お知らせ・研究テーマ・成果物・最終更新日 | よく触る |
| `index.html` | プロフィール文、researchmapリンク | たまに |
| `metacognition.html` | 「メタ認知による不安調整とは？」解説ページ（直接編集） | たまに |
| `news.html` | 過去のお知らせページ（中身は自動） | ほぼ触らない |
| `style.css` | 見た目 | ほぼ触らない |
| `render.js` | content.js を流し込む処理 | 触らない |
| `images/` | 画像 | 追加時のみ |

## よくある更新

**お知らせを追加** → `content.js` の `NEWS` の一番上に1ブロック足す。
トップには最新3件、それ以前は自動で「過去のお知らせ」に移ります。

```js
{
  date: "2026.11.1",
  text: "〇〇学会で発表しました。",
  link: "",          // URLを入れるとリンクが付く
},
```

**研究テーマ・成果物を追加** → `images/` に画像を置き、`PROJECTS` / `PORTFOLIO` に1ブロック足す。

**最終更新日** → `content.js` 末尾の `LAST_UPDATED` を書き換え。

## 公開（Cloudflare Pages）

1. このフォルダをGitHubのリポジトリにpush
2. Cloudflare Pages →「Create project」→ リポジトリを選択
3. Framework preset: **None** / Build command: **空欄** / Output directory: **/**
4. 以降は push するだけで自動反映

## 手元で確認

`index.html` をブラウザでダブルクリックで開けば表示されます。
