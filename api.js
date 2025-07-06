// api.js

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); 
const dotenv = require('dotenv');
const { connectDB } = require('./DataConfig/db');
const routes = require('./routes/Route');

dotenv.config();
console.log('📦 Loaded env:', {
  MONGO_URI: process.env.MONGO_URI ? '[OK]' : '[MISSING]',
});
connectDB()
  .then(() => console.log('✅ Mongo connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err); // <‑‑ dump the whole error
    // DO NOT call process.exit here in serverless
  });


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your API routes
app.use('/api/v1/items', routes);
app.get('/hello', (req, res) => {
  res.status(200).json({ ok: true });
});


module.exports = serverless(app);