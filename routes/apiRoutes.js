const Router = require('koa-router');
const redis = require('../middleware/redis');
const user = require('../controllers/user');
const apiRoutes = new Router();

/** 基本路由 */
apiRoutes.get(
  "/",
  async (ctx, next) => {
    ctx.body = "set body";
    await next();
  },
  async (ctx, next) => {
    console.log("next body",ctx.body)
    console.log(1);
    await next(); // next不写会报错
    console.log(4);
  },
  async (ctx) => {
    console.log(2);
    ctx.body = "set body again";
    console.log(3);
  }
);

apiRoutes.get("/success",async (ctx)=>{
  ctx.response.ok(data)
});

apiRoutes.get("/err",async (ctx)=>{
  ctx.response.notFound()
});

apiRoutes.get("/getApi", async (ctx) => {
  console.log(ctx.session, new Date().toLocaleString());
  redis.get("redis_id").then((result)=>{
    console.log("redis get result:", result)
  })
  await user.get(ctx);
  ctx.body = "this a getApi!";
});

apiRoutes.post("/postApi", async (ctx) => {
  // await Auth.register(ctx);
  redis.set("redis_id", JSON.stringify(ctx.request.body))
  ctx.body = "this a postApi!";
});

apiRoutes.del("/delApi", async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "this a delApi!";
});

module.exports = apiRoutes;