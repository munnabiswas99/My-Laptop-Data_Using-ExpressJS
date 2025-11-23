const express = require('express')
const laptops = require('./laptops.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My Laptop-dataaa')
})

app.get('/laptops', (req, res) => {
    res.send(laptops);
})

app.get('/laptops/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const laptop = laptops.find(laptop => laptop.id === id)

    res.send(laptop);

})
app.listen(port, () => {
  console.log(`My laptop data listening on port ${port}`)
})
