const fp = require('fastify-plugin');
const SubmissionService = require('./submissionService');

async function servicePlugin(fastify,options){
  const {submissionRepository} = fastify
  fastify.decorate('submissionService',new SubmissionService(submissionRepository))
}

module.exports = fp(servicePlugin)