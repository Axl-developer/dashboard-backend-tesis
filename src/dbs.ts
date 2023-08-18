import { connect } from "mongoose"
import { MONGODB_URI } from "./config"


export const connectDB = async () => {
    try {
        const db = await connect(MONGODB_URI)
        console.log('conect successful with database:', db.connection.db.databaseName)
    } catch (error) {
        console.log('error',error)
    }
}