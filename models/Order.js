const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  email: String,
  phone: String,
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    price: Number,
    qty: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', OrderSchema)
