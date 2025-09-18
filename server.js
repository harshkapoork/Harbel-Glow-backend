const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("home")
})
app.use("*",(req,res)=>{
res.json("page not found")
})
// Routes
app.use('/api/products', require('./routes/products'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/orders', require('./routes/orders'))

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
