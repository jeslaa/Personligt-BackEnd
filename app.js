const express = require('express');
const app = express();

// const productsController = require('./controllers/productsController')

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Controllers
app.use('/api/products', require('./controllers/productsController'))

module.exports = app;