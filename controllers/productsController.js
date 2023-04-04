const router = require('express').Router();
const productModel = require('../models/productModel')

//Post
router.post('/', productModel.postProduct)

//Get
router.get('/', productModel.getProducts)

//Get by id
router.get('/:id', productModel.getProductById)

//Put by id
router.put('/:id', productModel.editProduct)

//Delete
router.delete('/:id', productModel.deleteProduct)
module.exports = router