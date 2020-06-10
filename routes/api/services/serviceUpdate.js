const express = require('express');
const router = express.Router();
const Service = require('../../../models/Services');



router.post('/',

    async (req, res) => {
        let data = await req.body;


        try {
            const result = Service.updateMany({ id: data.id }, { id: data.id, serviceName: data.serviceName, description: data.description, status: data.status }, function (err) {
                if (err) console.log(err);
            });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router