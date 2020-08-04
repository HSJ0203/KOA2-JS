//判断当前环境类型
let config;
if (process.env.NODE_ENV === "production") {
  config = require("./app.config.production");
} else {
  config = require("./app.config.development");
}
module.exports = config;
