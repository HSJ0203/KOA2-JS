const Router = require('koa-router');
const upload = require('../utils/upload');

const uploadRoutes = new Router();

uploadRoutes.post("/single", upload.single("file"), async (ctx) => {
    try {
        let multerReq = ctx.req;
        console.log('ctx.file', multerReq.file);
        console.log('ctx.request.body', multerReq.body)
    } catch (error) {
        console.log('ctx.error', error);
    }
    ctx.body = 'done';
});

uploadRoutes.post("/multer", upload.array("file"), async (ctx) => {
    try {
        let multerReq = ctx.req;
        console.log('ctx.file', multerReq.files);
        console.log('ctx.request.body', multerReq.body)
    } catch (error) {
        console.log('ctx.error', error);
    }
    ctx.body = 'done';
});

module.exports = uploadRoutes;