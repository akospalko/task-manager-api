const mongoose = require('mongoose');

const connectDB = (url) => { // url -> connection string provided by mongo  
  mongoose
  .connect(url, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;