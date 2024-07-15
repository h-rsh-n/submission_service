const SubmissionRepository = require('./submissionRepository');

async function repositoryPlugin(fastify,options){
  fastify.decorate('submissionRepository',new SubmissionRepository());
}

module.exports = fp(repositoryPlugin)