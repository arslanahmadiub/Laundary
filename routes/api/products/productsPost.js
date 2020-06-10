const express = require('express');
const router = express.Router();
const Product = require('../../../models/Product');



router.post('/',


    async (req, res) => {
        const { id, productName, categoryName, status } = req.body;

        try {
            let product = new Product({
                id: id,
                productName: productName,
                categoryName: categoryName,
                status: status
            });
            await product.save();
            res.send(product);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router