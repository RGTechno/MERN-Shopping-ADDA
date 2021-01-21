import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoute from './routes/productsRoute.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API IS RUNNING')
})

app.use('/api/products', productRoute)

app.use((req, res, next) => {
  const error = new Error(`${req.originalUrl} NOT FOUND`)
  res.status(404)
  next(error)
})

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `server started in ${process.env.NODE_MODE} mode on http://localhost:${PORT}`
  )
})
