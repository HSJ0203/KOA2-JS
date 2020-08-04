const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const helmet = require("koa-helmet");
const session = require("koa-session");
const responseHandler = require("koa-response-handler");
const {config} = require("./config/app.config");
const { systemLog, appLog } = require("./middleware/logger");
const routes = require("./routes");
const app = new Koa();

app.keys = config.appkey;
app.use(session(config.Session, app));
app.use(async (ctx, next) => {
  if (ctx.session.app) {
    console.log("There is app session:", ctx.session.app);
  } else {
    console.log("There is not app session:");
    ctx.session.app = " Hello Word ! ";
  }
  await next();
});
app.use(systemLog());
app.use(helmet());
app.use(responseHandler({ contentType: "application/json" }));
app.use(BodyParser()).use(routes.routes());
app.use(routes.allowedMethods());
app.listen(config.port);


appLog.info(`Server running on port ${config.port}`);
console.log(`Server running on port ${config.port}`);
