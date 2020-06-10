const express = require('express');
const router = express.Router();
const PromoCodes = require('../../../models/PromoCodes');



router.post('/',

    async (req, res) => {
        let data = await req.body;


        try {
            const result = PromoCodes.updateMany({ id: data.id }, { id: data.id, promoName: data.promoName, promoCode: data.promoCode, description: data.description, promoType: data.promoType, discount: data.discount, status: data.status }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router