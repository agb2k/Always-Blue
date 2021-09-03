const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const dmRouter = require('./data_management/index')
app.use("/dm", dmRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})