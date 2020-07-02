# 説明
  staging環境に対しはansibleで環境構築をしている。
  ansibleをインストール後、下記のコマンドで実行する。
```
ansible-playbook ansible.yml \
  -i hosts \
  -u root \
  --ask-pass \
  -e 'ansible_python_interpreter=/usr/bin/python3' \
  -vvv
```