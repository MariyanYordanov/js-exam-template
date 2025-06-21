import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            dbName: process.env.DB_NAME,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Cannot connect to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;