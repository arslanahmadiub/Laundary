const mongoose = require('mongoose');

const ManagementSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },


    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }
});

module.exports = Management = mongoose.model('management', ManagementSchema, "Management")