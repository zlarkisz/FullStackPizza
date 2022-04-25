const express = require("express")
const app = express()

let count = 0

app.get('/', (req, res) => {
  res.json({"changed" : count})
})

const background = () => {
  console.log('background executed');
  count++
}

background()