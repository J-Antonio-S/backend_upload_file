import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI

export async function connectToDB(){
    try {
        
        console.log(MONGODB_URI)
        const mongooseDB = await mongoose.connect( MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}

