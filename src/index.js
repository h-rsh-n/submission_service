const app = require('./app');
const { dbConnection } = require('./config/dbConfig');
const { PORT } = require('./config/serverConfig')

const fastify = require('fastify')({
  logger:true
})

fastify.register(app);

fastify.listen({port:PORT},async(err)=>{
  if(err){
    fastify.log.error(err);
    process.exit(1);
  }
  await dbConnection();
  console.log(`Server started on port ${PORT}`);
})
