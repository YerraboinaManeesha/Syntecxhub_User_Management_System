require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Parse JSON request bodies
app.use(express.json());

// Public health-check route (no authentication)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'User Management API is running' });
});

// Protected user management routes (Basic Auth is applied inside userRoutes.js)
app.use('/api/users', userRoutes);

// These two must stay LAST
app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();