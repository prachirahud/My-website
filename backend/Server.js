import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
dotenv.config(); // Load .env variables
console.log(process.env.MONGO_URI); 
const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); 
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// MongoDB Connection
connectDB();

// Routes
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/contactus', contactRoutes); 




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(morgan('dev'));

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// // Routes
// import userRoutes from './routes/userRoutes.js';
// app.use('/api/v1/user', userRoutes);

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




