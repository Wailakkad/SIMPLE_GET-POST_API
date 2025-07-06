const Item = require('../models/Items');


// get Items from the database
// This function retrieves all items from the database and sends them as a JSON response.
const getAllItems = async (req, res) => {
    try{
        const reponse  = await Item.find({});
        res.status(200).json(reponse);

    }catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
// // create an item in the database
// This function creates a new item in the database using the data provided in the request body.
const createItem = async (req, res) => {
    try{
        const {name , price} = req.body;
        if(!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }
        const newItem = await Item.create({ name, price });
        res.status(201).json(newItem);

    }catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}





module.exports = {getAllItems , createItem};