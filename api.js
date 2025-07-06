// api.js

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); 
const dotenv = require('dotenv');
const  connectDB  = require('./DataConfig/db');
const routes = require('./routes/Route');

dotenv.config();
console.log('📦 Loaded env:', {
  MONGO_URI: process.env.MONGO_URI ? '[OK]' : '[MISSING]',
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

module.exports = async (req, res) => {
  await connectDB();                    // ⬅️  make sure Mongo is connected
  return serverless(app)(req, res, {
    callbackWaitsForEmptyEventLoop: false,  // allow Lambda to finish early
  });
};