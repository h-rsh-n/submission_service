const fastifyPlugin = require('fastify-plugin');
const TestService = require('./testService');

async function servicePlugin(fastify,options){
  fastify.decorate('testService',new TestService());
}

module.exports = fastifyPlugin(servicePlugin);