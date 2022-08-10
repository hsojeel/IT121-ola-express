const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ola from Express!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/about', (req, res) => {
  res.send('This is our about page!')
})

