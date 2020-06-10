const mongoose = require('mongoose');

const PromoCodeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    promoName: {
        type: String,
        required: true
    },
    promoCode: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    promoType: {
        type: String,
        required: true
    },
    discount: {
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

module.exports = PromoCode = mongoose.model('promoCode', PromoCodeSchema, "PromoCode")