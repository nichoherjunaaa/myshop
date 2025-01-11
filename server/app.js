import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/authRouter.js'
import productRouter from './routes/productRouter.js'
import dbConnection from './config/dbConnection.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()
const port = 3000

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

dbConnection()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product', productRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})