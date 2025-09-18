const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  images: [String],
  weight: String,
  size: String,
  manufacturer: String,
  usage: String,
  warranty: String
})

module.exports = mongoose.model('Product', ProductSchema)
