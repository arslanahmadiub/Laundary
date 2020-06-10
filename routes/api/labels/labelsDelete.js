const express = require('express');
const router = express.Router();
const Labels = require('../../../models/Labels');



router.post('/',

    async (req, res) => {
        const labelId = req.body;
        try {

            await Labels.findOneAndDelete({ _id: labelId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(labelId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router