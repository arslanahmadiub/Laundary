const express = require('express');
const router = express.Router();
const Management = require('../../../models/Management');



router.post('/',


    async (req, res) => {
        const { id, serviceName, categoryName, productName, amount } = req.body;

        try {
            let management = new Management({
                id: id,
                serviceName: serviceName,
                categoryName: categoryName,
                productName: productName,
                amount: amount
            });
            await management.save();
            res.send(management);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router