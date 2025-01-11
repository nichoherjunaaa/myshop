import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

export const createProduct = asyncHandler(async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(201).json({
        message: 'Product created',
        data: newProduct
    })
})

export const allProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({
        message: 'Success get all products',
        data: products
    })
})

export const detailProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const product = await Product.findById(paramsId)
    if(!product) {
        res.status(404)
        throw new Error('Product not found')
    }
    return res.status(200).json({
        message: 'Success get detail product',
        data: product
    })
})

export const updateProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const product = await Product.findByIdAndUpdate(paramsId, req.body, { 
        new: true, 
        runValidators: false
    })
    if(!product) {
        res.status(404)
        throw new Error('Product not found')
    }
    return res.status(200).json({
        message: 'Success update product',
        data: product
    })
})

export const deleteProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const product = await Product.findByIdAndDelete(paramsId)
    if(!product) {
        res.status(404)
        throw new Error('Product not found')
    }
    return res.status(200).json({
        message: 'Success delete product',
        data: product
    })
})

export const uploadDataProduct = asyncHandler(async (req, res) => {

    // TODO: Implement upload data product from CSV file
    
    res.status(200).json({
        message: 'Success upload data product from CSV file'
    })
})
