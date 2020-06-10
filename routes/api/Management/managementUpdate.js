const express = require('express');
const router = express.Router();
const Management = require('../../../models/Management');







router.post('/',

    async (req, res) => {
        let data = await req.body;

        console.log(data)
        try {
            const result = Management.updateMany({ id: data.id }, { id: data.id, serviceName: data.serviceName, categoryName: data.categoryName, productName: data.productName, amount: data.amount }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router