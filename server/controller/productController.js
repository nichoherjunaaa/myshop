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

    const queryObj = { ...req.query }

    const excludeFields = ['page', 'limit']
    excludeFields.forEach(el => delete queryObj[el])

    // console.log(queryObj);
    let query = Product.find(queryObj)

    const page = req.query.page * 1 || 1
    const limitData = req.query.limit * 1 || 30
    const skipData = (page - 1) * limitData
    query = query.skip(skipData).limit(limitData)


    if (req.query.page) {
        const numProduct = await Product.countDocuments()
        if (skipData >= numProduct) {
            res.status(404)
            throw new Error('This page does not exist')
        }
    }

    const data = await query

    res.status(200).json({
        message: 'Success get all products',
        data
    })
})

export const detailProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const product = await Product.findById(paramsId)
    if (!product) {
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
    if (!product) {
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
    if (!product) {
        res.status(404)
        throw new Error('Product not found')
    }
    return res.status(200).json({
        message: 'Success delete product',
        data: product
    })
})

export const uploadDataProduct = asyncHandler(async (req, res) => {
    const file = req.file
    if (!file) {
        res.status(400)
        throw new Error('Tidak ada file yang di upload')
    }
    const imageFileName = file.filename
    const pathImageFile = `/uploads/${imageFileName}`
    res.status(200).json({
        message: 'Success upload image',
        image: pathImageFile
    })
})
