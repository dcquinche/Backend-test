const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}!`));

const products = [
    {
      "id": 1,
      "name": "Dress",
      "isActive": true,
      "isUsed": false
    },
    {
      "id": 2,
      "name": "Gloves",
      "isActive": false,
      "isUsed": false
    },
    {
      "id": 3,
      "name": "Hat",
      "isActive": true,
      "isUsed": true
    },
    {
      "id": 4,
      "name": "Coat",
      "isActive": true,
      "isUsed": false
    },
    {
      "id": 5,
      "name": "Socks",
      "isActive": false,
      "isUsed": true
    },
  ]

// Get All Products
app.get('/api/products', (req, res) => {
    res.json(products);
  });

// Get Product By Id
app.get('/api/products/:id', (req, res) => {
  let idSelected = Number(req.params.id)
  const product = products.find(product => product.id === idSelected)
  if(!product){
    res.status(404).send("No se encuentra el producto")
  } else {
    res.json(product)
  }
});

