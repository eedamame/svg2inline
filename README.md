# svg2css by eedamame

SVGファイルをCSS data URLに変換するWebツールです。ブラウザ上で安全に処理し、リアルタイム編集とプレビュー機能付き。

## 特徴

- 🔒 **プライバシー重視**: ファイルはサーバーに送信されず、ブラウザ内でのみ処理
- ⚡ **リアルタイム編集**: CSS data URLをその場で編集して即座にプレビュー
- 📱 **レスポンシブ**: モバイルデバイス対応
- 🎨 **モダンUI**: Tailwind CSS v4を使用した美しいデザイン

## 技術スタック

- **Frontend**: React 19 + Parcel
- **Styling**: Tailwind CSS v4
- **Analytics**: Google Analytics 4
- **Monetization**: Google AdSense

## セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
```bash
cp .env.example .env
```

`.env`ファイルを編集し、実際のIDを設定：
```bash
# Google Analytics
REACT_APP_GA_MEASUREMENT_ID=G-あなたのMeasurementID

# Google AdSense
REACT_APP_ADSENSE_CLIENT_ID=ca-pub-あなたのPublisherID
```

### 3. 開発サーバー起動
```bash
npm start
```

### 4. 本番ビルド
```bash
npm run build
```

## Google Analytics & AdSense 設定

### Google Analytics 4
1. [Google Analytics](https://analytics.google.com/) にアクセス
2. 新しいプロパティを作成
3. Measurement ID (G-XXXXXXXXXX) を取得
4. `.env`に設定

### Google AdSense
1. [Google AdSense](https://www.google.com/adsense/) にアクセス
2. サイトを追加
3. Publisher ID (ca-pub-XXXXXXXXXXXXXXXX) を取得
4. `.env`に設定

## ライセンス

MIT License

## 作者

eedamame - [eedamameinfo@gmail.com](mailto:eedamameinfo@gmail.com)

## サイト

https://svg2css.eedama.me