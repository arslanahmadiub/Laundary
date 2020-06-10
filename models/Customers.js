const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
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

module.exports = Customer = mongoose.model('customer', CustomerSchema, "Customer")