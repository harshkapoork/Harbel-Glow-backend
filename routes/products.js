const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// Get product by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

// Get products by category
router.get('/category/:categoryId', async (req, res) => {
  const products = await Product.find({ categoryId: req.params.categoryId })
  res.json(products)
})

// Create product
router.post('/', async (req, res) => {
  const prod = new Product(req.body)
  await prod.save()
  res.json(prod)
})

module.exports = router
