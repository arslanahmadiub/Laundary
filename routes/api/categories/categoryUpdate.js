const express = require('express');
const router = express.Router();
const Category = require('../../../models/Category');





router.post('/',

    async (req, res) => {
        let data = await req.body;


        try {
            const result = Category.updateMany({ id: data.id }, { id: data.id, categoryName: data.categoryName, status: data.status }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router