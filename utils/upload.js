const multer = require("koa-multer");
const moment = require("moment");

//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: "uploads/" + moment(new Date()).format("YYYY-MM-DD"),
  //修改文件名称
  filename: function (ctx, file, cb) {
    const filenameArr = file.originalname.split(".");
    cb(null, Date.now() + "." + filenameArr[filenameArr.length - 1]);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
