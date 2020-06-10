const express = require('express');
const router = express.Router();
const DeliveryBoys = require('../../../models/DeliveryBoys');

router.post('/',

    async (req, res) => {
        const boyId = req.body;
        try {

            await DeliveryBoys.findOneAndDelete({ _id: boyId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(boyId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router