const mongoose = require('mongoose');

const DeliveryBoysSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    boyName: {
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

module.exports = DeliveryBoys = mongoose.model('deliveryBoys', DeliveryBoysSchema, "DeliveryBoys")