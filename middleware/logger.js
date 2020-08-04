const log4js = require("koa-log4");
const log4jsConf = require("../config/log.config");

log4js.configure(log4jsConf);

exports.systemLog = () =>
  log4js.koaLogger(log4js.getLogger("system"), {
    level: "auto",
    // format: ":method :url :status :response-time ms",
  });
exports.appLog = log4js.getLogger("app");
exports.errLog = log4js.getLogger("error");
