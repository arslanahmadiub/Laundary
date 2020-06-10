const express = require('express');
const router = express.Router();
const DeliveryBoys = require('../../../models/DeliveryBoys');



router.post('/',

    async (req, res) => {
        let data = await req.body;

        console.log(data)
        try {
            const result = DeliveryBoys.updateMany({ id: data.id }, { id: data.id, boyName: data.boyName, mobile: data.mobile, email: data.email, status: data.status }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router