const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
mongoose.connect('localhost:8080/test')

const dmRouter = require('./data_management/index')
app.use("/dm", dmRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})