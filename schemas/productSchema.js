const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:               { type: String, required: [true, 'You need to enter a name on the product']  },
    description:        { type: String, required: [true, 'You need to enter a description on the product']  },
    price:              { type: Number, required: [true, 'You need to enter the price on the product'] },
    imageURL:           { type: String, required: [true, 'Image']  }

    
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)