import express from 'express'
const route = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc FETCH ALL PRODUCTS
// @route GET /api/products
// @access PUBLIC

route.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)


// @desc FETCH SINGLE PRODUCTS
// @route GET /api/products/:id
// @access PUBLIC

route.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product Not Found' })
    }
  })
)

export default route
