const express = require('express');
const router = express.Router();
const PromoCodes = require('../../../models/PromoCodes');



router.post('/',


    async (req, res) => {
        const { id, promoName, promoCode, description, promoType, discount, status } = req.body;

        try {
            let promoCodes = new PromoCodes({
                id: id,
                promoName: promoName,
                promoCode: promoCode,
                description: description,
                promoType: promoType,
                discount: discount,
                status: status
            });
            await promoCodes.save();
            res.send(promoCodes);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router