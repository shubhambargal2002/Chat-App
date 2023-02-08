const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
// const MONGO_URI = "mongodb+srv://shubham_bargal_2002:ShubhamBargal@cluster0.dcubvkh.mongodb.net/chat-app"
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true 
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
