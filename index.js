const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connectDB = require('./connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const userRoute = require('./data_management/index')

app.use(bodyParser.json());
app.use(cors());

app.use('/dm', userRoute)
app.use(express.static(path.join(__dirname,'/views/')));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'/views/index.html'));
});
// var path = __dirname + '/views/';

const dbURI = 'mongodb+srv://yhChin:<password>@cluster0.u7hep.mongodb.net/HLB_Hack?retryWrites=true&w=majority'

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})