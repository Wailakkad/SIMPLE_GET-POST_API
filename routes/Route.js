const express = require('express');
const router = express.Router();
const { getAllItems, createItem } = require('../controllers/Controller');



router.route("/").get(getAllItems).post(createItem);



module.exports = router;