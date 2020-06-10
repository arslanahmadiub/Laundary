const express = require('express');
const router = express.Router();
const Category = require('../../../models/Category');



router.post('/',


    async (req, res) => {
        const { id, categoryName, status } = req.body;

        try {
            let category = new Category({
                id: id,
                categoryName: categoryName,
                status: status
            });
            await category.save();
            res.send(category);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router