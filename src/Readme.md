# 概要

  小口の政治献金システムをオープンソース化して誰でも簡単に使用できるようにすることを目的としている。

# ディレクトリ構成
.
├── infra
│   ├── develop 開発環境。vagrantで構築されている。
│   ├── staging ステージング環境。k8sでの実装をテストする。
│   └── product 本番環境。
└── src
    ├── backend srapiでのAPI送信部分
    └── frontend angularでのGUI側




# 本番環境構築手順
  未着手。
  予定としてはangularでビルドしたwebpackを、nginxサーバーで静的ウェブサイトホスティング実行させる。
  backendのAPIは開発環境と同様、そのまま本番環境に向けさせる。


