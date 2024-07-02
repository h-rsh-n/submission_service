const PORT  = 3000;

const fastify = require('fastify')({
  logger:true
})

fastify.register(require('./app'))

fastify.listen({port:PORT},(err)=>{
  if(err){
    fastify.log.error(err);
  }
  console.log(`server started at port ${PORT}`);
})
