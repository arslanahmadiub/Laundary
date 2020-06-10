const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    description: {
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

module.exports = Services = mongoose.model('services', ServiceSchema, "Services")