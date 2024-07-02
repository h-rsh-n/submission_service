// const testService = require('../services/testService')

async function pingRequest(req,res){


  const response = await this.testService.pingCheck();
  return res.send({data:response});
}

module.exports = {pingRequest};