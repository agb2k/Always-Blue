var express = require('express');
const app = express();
// var cors = require("cors");
const mongoose = require('mongoose');

//connection string to db
const dbURI = 'mongodb+srv://yhChin:Jryan238110@cluster0.u7hep.mongodb.net/HLB_Hack?retryWrites=true&w=majority'

//Connect to database
const connectDB = async()=>{
  await mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
   });
  console.log('connected to database');
}

module.exports = connectDB;