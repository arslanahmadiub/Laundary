const express = require('express');
const router = express.Router();
const Customers = require('../../../models/Customers');



router.post('/',


    async (req, res) => {
        const { id, customerName, mobile, email, status } = req.body;

        try {
            let customers = new Customers({
                id: id,
                customerName: customerName,
                mobile: mobile,
                email: email,
                status: status
            });
            await customers.save();
            res.send(customers);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router