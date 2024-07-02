const testController = require('../../../../controller/testController')

async function testRoutes(fastify,options){
  //console.log('here in router')
  fastify.get('/ping',testController.pingRequest)
}  

module.exports = testRoutes;