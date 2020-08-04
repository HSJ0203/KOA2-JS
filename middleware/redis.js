const ioredis = require('ioredis');
const config = require('../config/app.config');

const redis = new ioredis(config.redis);
module.exports = redis;

