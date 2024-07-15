const { createSubmission } = require("../../../../controller/submissionControler");

async function submissionRoutes(fastify,options){
  fastify.post('/',createSubmission);
}

module.exports = submissionRoutes;