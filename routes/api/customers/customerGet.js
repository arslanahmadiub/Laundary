const express = require('express');
const router = express.Router();
const Customers = require('../../../models/Customers');






router.get('/',

    async (req, res) => {


        try {

            const data = await Customers.find();
            res.send(data);


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router