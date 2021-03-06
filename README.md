### 概况

基于 KOA2 + JavaScript 创建的Server环境。

---

#### Usage

**请安装 NodeJS V10+ 版本  && GIT环境**

1. git clone https://github.com/HSJ0203/KOA2-JS.git

2. cd KOA2-JS

3. npm install

4. npm run start

> **(Optional)** npm run watch : 可启动自动重启脚本

---

#### Project Layout

```
├── log                     ---  日志文件
│   ├── app                 ---  存放info, debug日志
│   ├── errors              ---  存放error日志
│   ├── system              ---  存放系统级日志（例如：http请求等）
├── node_modules            ---  node运行库
├── config              ---  程序配置类文件夹
├── controller          ---  控制类文件夹
├── entity              ---  数据库实例文件夹
├── middleware          ---  中间件文件夹
├── routes              ---  路由文件夹
├── service             ---  数据处理类文件夹
├── utils               ---  工具类文件夹
├── app.js              ---  程序入口文件
└── uploads                 ---  上传文件保存文件夹
├── .gitignore              ---  git上传忽略配置文件
├── package.json            ---  package
├── README.md               ---  readme文件
```

---

#### Databases

> Mysql

> Redis

---

#### Future

> 支持JWT

> 支持MonogoDB

> 支持PM2启动

> mysql pool配置

---
