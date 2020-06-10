const express = require('express');
const router = express.Router();
const Product = require('../../../models/Product');






router.post('/',

    async (req, res) => {
        const productId = req.body;
        try {

            await Product.findOneAndDelete({ _id: productId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(productId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router