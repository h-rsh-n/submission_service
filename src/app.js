const fastifyPlugin = require('fastify-plugin');

async function app(fastify,options){
  fastify.register(require('@fastify/cors'));
  fastify.register(require('./services/servicePlugin'))
  fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
}
module.exports = fastifyPlugin(app)