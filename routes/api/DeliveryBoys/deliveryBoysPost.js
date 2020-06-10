const express = require('express');
const router = express.Router();
const DeliveryBoys = require('../../../models/DeliveryBoys');



router.post('/',


    async (req, res) => {
        const { id, boyName, mobile, email, status } = req.body;

        try {
            let deliveryBoys = new DeliveryBoys({
                id: id,
                boyName: boyName,
                mobile: mobile,
                email: email,
                status: status
            });
            await deliveryBoys.save();
            res.send(deliveryBoys);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router