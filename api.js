// api.js

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); 
const dotenv = require('dotenv');
const { connectDB } = require('./DataConfig/db');
const routes = require('./routes/Route');

dotenv.config();

connectDB(); // Connect to MongoDB Atlas

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your API routes
app.use('/api/v1/items', routes);


module.exports.handler = serverless(app);
