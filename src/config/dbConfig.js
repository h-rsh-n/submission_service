const {NODE_ENV,MONGO_ATLAS_CONNECTION} = require('./serverConfig');
const mongoose = require('mongoose');

async function dbConnection(){
  try {
    if(NODE_ENV == "development"){
      await mongoose.connect(MONGO_ATLAS_CONNECTION);
      console.log('Connection to DB successful');
    }
  } catch (error) {
    console.log('unable to connect');
  }
}

module.exports = {
  dbConnection
}