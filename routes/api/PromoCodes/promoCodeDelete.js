const express = require('express');
const router = express.Router();
const PromoCodes = require('../../../models/PromoCodes');


router.post('/',

    async (req, res) => {
        const promoId = req.body;
        try {

            await PromoCodes.findOneAndDelete({ _id: promoId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(promoId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router