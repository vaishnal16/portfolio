require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const contactRoutes = require('./contactRoutes');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Contact Form API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});