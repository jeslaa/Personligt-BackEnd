const router = require('../controllers/productsController')
const product = require('../schemas/productSchema')

//POST /api/products
exports.postProduct = (req, res) => {

    const {name, description, price, imageURL } = req.body

    if(!name || !description || !price || !imageURL){
        return res.status(400).json({
            message: 'You need to enter name, description, price and imageURL'
        })
    }

    product.create({ name, description, price, imageURL })
    .then(data => res.status(200).json(data))
    .catch(err => {
        res.status(500).json({ message: 'Something went wrong creating the product',
        })
    })
}

//GET /api/products
exports.getProducts = (req, res) => {
    product.find()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong getting the product' }))
}

//Get product by id
exports.getProductById = (req, res) => {
    id = req.params.id
    product.findById(id)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong getting the product by id' }))
}

//Put by id
exports.editProduct = (req, res) => {
    const {name, description, price, imageURL } = req.body

    id = req.params.id

    product.findByIdAndUpdate(id, { name, description, price, imageURL }, { new: true })
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong updating the product' }))
}

//Delete by id
exports.deleteProduct = (req, res) => {
    product.findByIdAndDelete(req.params.id)
    .then(product => {
        if(!product){
            res.status(404).json({ message: 'Could not find that product' })
            return
        }

        res.status(200).json({ id: product._id })
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong when deleting the product' }))
}


//     name:               
//     description:
//     price:      
//     imageURL: