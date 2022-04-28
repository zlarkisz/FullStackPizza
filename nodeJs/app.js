const express = require('express')
const morgan = require('morgan')
const webUrl = 'http://localhost:8080'

// express app
const app = express()

// enable CORS for 'http://localhost:8080'
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', webUrl);
  next()
})

//listen for requests
app.listen(3000)

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ name: 'Pedro' })
})

app.get('/sizes', (req, res) => {
  res.sendFile('./jsons/sizes.json', { root: __dirname })
})

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./jsons/404.json', { root: __dirname })
})