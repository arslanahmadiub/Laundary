const express = require('express');
const router = express.Router();
const Product = require('../../../models/Product');






router.post('/',

    async (req, res) => {
        let data = await req.body;

        console.log(data)
        try {
            const result = Product.updateMany({ id: data.id }, { id: data.id, productName: data.productName, categoryName: data.categoryName, status: data.status }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router