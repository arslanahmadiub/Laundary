const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }
});

module.exports = Category = mongoose.model('category', CategorySchema, "Category")