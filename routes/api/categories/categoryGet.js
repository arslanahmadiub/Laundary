const express = require('express');
const router = express.Router();
const Category = require('../../../models/Category');




router.get('/',

    async (req, res) => {


        try {

            const data = await Category.find();
            res.send(data);


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router