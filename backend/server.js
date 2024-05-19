const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./db');
const bookRoutes = require('./bookRoutes');

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});