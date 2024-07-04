const express = require('express')
const app = express()
const port = 3000
let viewPath = __dirname + '/views/index.html'

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/api/:date', (req, res) => {
  let param =req.params.date
 
  let date = new Date(parseInt(param))
  console.log(date)
  res.json({unix : param, utc: date.toUTCString()})
})

app.get('/', (req, res) => {
  res.sendFile(viewPath)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})