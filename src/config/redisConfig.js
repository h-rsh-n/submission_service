const Redis = require('ioredis');
const {REDIS_HOST,REDIS_PORT} = require('./serverConfig')

const redisConfig = {
  port:REDIS_PORT,
  host:REDIS_HOST
}

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;