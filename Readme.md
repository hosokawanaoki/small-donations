# 概要
  小口の政治献金システムをオープンソース化して誰でも簡単に使用できるようにすることを目的としている。

# 開発環境の起動方法
  git clone 後　以下のコマンドを実行する
  ```
    docker-compose up 
  ```
  ビルドが実行した後、
  - frontend
  - backend
  - DB  
  のコンテナが起動する。各クラスタが連携することで開発環境が使用可能となる。
　クラスタ同士はAPI経由で実行されている。

# 本番環境構築手順
  未着手。
  予定としてはangularでビルドしたwebpackを、nginxサーバーで静的ウェブサイトホスティング実行させる。
  backendのAPIは開発環境と同様、そのまま本番環境に向けさせる。

# 機能構造
  クラスタの各要素ごとに説明する。

## frontend

### 概要
  UIを担当する。  
  デザインテンプレート： [nebular](https://akveo.github.io/nebular/docs/getting-started/what-is-nebular#what-is-nebular)  
  API操作: [APOLLO](https://www.apollographql.com/docs/) 

  


### 使用方法

http://localhost:4200/　を開く。

### ファイル構成

## backend

### 概要
  コンテンツ管理のバックエンドをAPIで提供している。
  実行するため、Headless CMSのstrapi が動作している。
  frontendとはGraphQLを使い、CRUD操作を行う。

### 使用方法
http://localhost:1337/admin
を開く。

最初は初期設定を行う。

「Create the first administrator」を実行する。

初期ログイン情報を作成する。管理ユーザーの初期は以下としている。
```
ID: Admin
PASS: Admin1111!
MAIL: Admin@example.com
```

### ファイル構成

 app/api
 配下に
  - テーブル定義
  - エクステンション
  - 設定
  が格納されている。


## DB

### 概要
  dynamoDBでデータが格納されている。

### 使用方法
  データ操作はstrapiの管理コンソール上から実行する。

### ファイル構成
  データはbackend/data/db 配下に保存されている。初回にフォルダが生成される。

# ライセンス利用
  - Nebular
    Copyright Akveo. All Rights Reserved.
