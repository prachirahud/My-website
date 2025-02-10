import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Mongoose connection
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
        socketTimeoutMS: 45000,    
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;



// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config(); // This loads the environment variables from the .env file

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));


// import mongoose from 'mongoose';
// import colors from 'colors';

// const connectDB = async () =>{
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`Connected to MongoDb Database ${conn.connection.host}` .bgMagenta.white);
//     } catch (error) {
//         console.log(`error in MongoDB ${error}` .bgRed.white)
//     }
// };

// export default connectDB;