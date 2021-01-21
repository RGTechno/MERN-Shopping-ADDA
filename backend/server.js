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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `server started in ${process.env.NODE_MODE} mode on http://localhost:${PORT}`
  )
})
