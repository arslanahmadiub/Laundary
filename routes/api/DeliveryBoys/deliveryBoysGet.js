const express = require('express');
const router = express.Router();
const DeliveryBoys = require('../../../models/DeliveryBoys');







router.get('/',

    async (req, res) => {


        try {

            const data = await DeliveryBoys.find();
            res.send(data);


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router