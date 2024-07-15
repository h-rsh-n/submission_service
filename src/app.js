const fp = require('fastify-plugin');
const apiRouter = require('./routes/api/apiRoutes');
const repositoryPlugin = require('./repositories/repositoryPlugin');
const servicePlugin = require('./services/servicePlugin');

async function app(fastify,options){
  fastify.register(repositoryPlugin);
  fastify.register(servicePlugin);
  fastify.register(apiRouter,{prefix:'/api'});
}
module.exports = fp(app);