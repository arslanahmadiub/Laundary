const express = require('express');
const router = express.Router();
const Category = require('../../../models/Category');





router.post('/',

    async (req, res) => {
        const categoryId = req.body;
        try {

            await Category.findOneAndDelete({ _id: categoryId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(serviceId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router