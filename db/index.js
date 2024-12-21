import mongoose from "mongoose";
const DB_NAME = "URL_shortner";

const connectDB = async () => {
    try {
        console.log(`Connecting to MongoDB at ${process.env.MONGODB_URI}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMONGODB connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;