const express = require('express');
const router = express.Router();
const Labels = require('../../../models/Labels');



router.post('/',


    async (req, res) => {
        const { id, labelName, description } = req.body;

        try {
            let labels = new Labels({
                id: id,
                labelName: labelName,
                description: description

            });
            await labels.save();
            res.send(labels);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router