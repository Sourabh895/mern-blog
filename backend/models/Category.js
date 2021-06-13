const mongoose = require('mongoose');

const CatgorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

},{timestamps: true});

module.exports = mongoose.model("Category", CatgorySchema);