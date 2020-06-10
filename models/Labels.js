const mongoose = require('mongoose');

const LabelsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    labelName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now

    }
});

module.exports = Labels = mongoose.model('labels', LabelsSchema, "Labels")