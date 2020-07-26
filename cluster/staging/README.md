# 説明
  staging環境に対しては、docker経由でansibleで環境構築をしている。
  ansibleをインストール後、下記のコマンドで実行する。


## 使い方
1. Dockerコンテナの起動
```
docker-compose up -d
```
2. Ansibleコンテナに接続
```
docker exec -it ansible /bin/bash
```
3. サーバーに対し、sshの接続確認
```
ssh root@118.27.33.240    # yesで接続
exit
```
4. サーバーに対し、ansibleコマンドを実行
```
ansible-playbook ansible.yml \
  -i hosts \
  -u root \
  --ask-pass \
  -e 'ansible_python_interpreter=/usr/bin/python3' \
  -vvv
```