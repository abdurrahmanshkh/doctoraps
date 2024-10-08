const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);    
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`MongoDB Sever Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;
