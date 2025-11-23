const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My Laptop-dataaa')
})

app.listen(port, () => {
  console.log(`My laptop data listening on port ${port}`)
})
