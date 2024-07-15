const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId:{
    type:String,
    required:[true,'UserId for the submission is missing']
  },
  problemId:{
    type:String,
    required:[true,'problemId for the submission is missing']
  },
  code:{
    type:String,
    required:[true,'code for the submission is missing']
  },
  language:{
    type:String,
    required:[true,'language for the subission is missing']
  },
  status:{
    type:String,
    enum:["Pending","Success","TLE","MLE","RE","WA"],
    default:"Pending"
  }
})

const Submission=mongoose.model('Submission',submissionSchema)
module.exports = Submission;