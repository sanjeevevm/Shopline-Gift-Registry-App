import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect('mongodb+srv://sharmaayushi904:dZnjTQo3hQ43oAsP@cluster0.xcj2uvm.mongodb.net/',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`Mongo connected:${conn.connection.host}`)
    } catch (error) {
        console.error(`${error.message}`)
        process.exit(1)
    }
}

export default connectDB