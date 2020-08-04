const Router = require('koa-router');
const apiRoutes = require('./apiRoutes');
const uploadRoutes = require('./upload');

const routes = new Router();

/** 层级路由 */
routes.use('/api',apiRoutes.routes());
routes.use('/upload',uploadRoutes.routes());

module.exports = routes;