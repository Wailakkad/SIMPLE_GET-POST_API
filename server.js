const express = require('express');
const cors = require('cors');
const port = 3000;
const { connectDB } = require('./DataConfig/db');
const routes = require('./routes/Route');
dotenv = require('dotenv');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the base route for the API
// This sets up the API to handle requests at the '/api/v1/items' endpoint.
app.use('/api/v1/items', routes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});