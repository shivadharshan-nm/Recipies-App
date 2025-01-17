import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorMiddleware.js';
import recipeRoutes from './routes/recipeRoutes.js';
import connectDB from './config/db.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/recipes', recipeRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
