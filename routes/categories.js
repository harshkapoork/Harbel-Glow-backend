const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
})

// Create category
router.post('/', async (req, res) => {
  const { name, slug } = req.body
  const cat = new Category({ name, slug })
  await cat.save()
  res.json(cat)
})

module.exports = router
