"use strict";
exports.config = {
  appkey: ["RITS"],
  port: 80,
  SQL: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: "3308",
      user: "root",
      password: "123456",
      database: "koa",
      multipleStatements: true,
    },
    pool: { min: 0, max: 8 },
  },
  Redis: {
    host: "localhost",
    port: 6379,
  },
  Session: {
    key: "koa:sess",
    maxAge: 60000,
  },
};
