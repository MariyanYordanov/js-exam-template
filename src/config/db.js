import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/<dbname>', {
            dbName: '<dbname>',
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Cannot connect to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;