const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connectDB = require('./connection');
const bodyParser = require('body-parser');
const cors = require('cors');

const route = require('./data_management/index')

app.use(bodyParser.json());
app.use(cors());

app.use('/', route)

const dbURI = 'mongodb+srv://yhChin:<password>@cluster0.u7hep.mongodb.net/HLB_Hack?retryWrites=true&w=majority'

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})