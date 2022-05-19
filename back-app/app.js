const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const route = require('../back-app/Architecture/Routes/appRoutes')

mongoose.connect('mongodb://localhost/cookbook', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.use('/api', route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})