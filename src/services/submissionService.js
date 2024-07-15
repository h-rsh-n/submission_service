const submissionQueueProducer = require("../producers/submissionQueueProducer");

class SubmissionService{
  constructor(submissionRepository){
    this.submissionRepository = submissionRepository;
  }
  async addSubmission(submission){
    const submission = await this.submissionRepository.createSubmission(submission);
    if(!submission){
      throw {message:'Not able to create a submission'}
    }
    const response = await submissionQueueProducer(submission);
    return {queueResponse:response,submission};
  }
}

module.exports = SubmissionService;