const mongoose = require('mongoose');

const FaqsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },

    answer: {
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

module.exports = Faqs = mongoose.model('faqs', FaqsSchema, "Faqs")