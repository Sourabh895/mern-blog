const router = require('express').Router();
const Category = require('../models/Category');

// Create Category
router.post('/', async(req, res) => {
    const newcat = new Category(req.body);
    try{
      const savedcat = await newcat.save();
      res.status(200).json(savedcat);
    }catch(err){
      res.status(500).json(err);
    }
})

//Get Categories
 router.get('/', async(req, res) => {
    try{
      const cats = await Category.find();
      res.status(200).json(cats);
    }catch(err){
      res.status(500).json(err);
    }
})




module.exports = router;