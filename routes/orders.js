const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

// Create order
router.post('/', async (req, res) => {
  const order = new Order(req.body)
  await order.save()
  res.json(order)
})

// Update order status
router.put('/:id/status', async (req, res) => {
  const { status } = req.body
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true })
  res.json(order)
})

module.exports = router
