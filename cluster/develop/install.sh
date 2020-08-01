#!/usr/bin/bash

USER=ubuntu

# 最初アプリを起動すること。操作ユーザーを作成できる。
sudo apt update -y
sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates gnupg-agent software-properties-common curl -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose -y

# 再起動
sudo gpasswd -a  $USER  docker

# bashrc に sudo /etc/init.d/docker start  を追記する

# ubuntuユーザーにパスワードなし設定を行う
# sudo visudo
# ubuntu    ALL=(ALL)    NOPASSWD: ALL


# git setting
# git config --local user.name "name"
# git config --local user.email "email"

