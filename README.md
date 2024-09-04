## はじめに
このリポジトリは、Webアプリ作成の練習用のリポジトリである。

## ビルド
```sh
docker compose build
```

## 実行
```sh
docker compose up
```

### api 実行
```sh
curl localhost:3000/
```

### DB 操作
```sh
docker exec -i -t postgres-container bash
psql -U postgres -d postgres

# ex) INSERT
insert into users (name, age) values ('MY NAME', 20);
```
