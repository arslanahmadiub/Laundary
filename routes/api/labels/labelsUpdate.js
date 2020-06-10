const express = require('express');
const router = express.Router();
const Labels = require('../../../models/Labels');




router.post('/',

    async (req, res) => {
        let data = await req.body;


        try {
            const result = Labels.updateMany({ id: data.id },
                { id: data.id, labelName: data.labelName, description: data.description }, function (err) {
                    if (err) console.log(err);
                });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router