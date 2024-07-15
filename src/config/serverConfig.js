const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT:process.env.PORT||5000,
  MONGO_ATLAS_CONNECTION:process.env.MONGO_ATLAS_CONNECTION,
  NODE_ENV:process.env.NODE_ENV,
  REDIS_PORT:process.env.REDIS_PORT,
  REDIS_HOST:process.env.REDIS_HOST
}