import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    console.log(`Database Connected with host: ${conn.connection.host}`)
  } catch (error) {
    console.log(`ERROR: ${error}`)
    process.exit(1)
  }
}

export default connectDB
