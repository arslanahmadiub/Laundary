const express = require('express');
const router = express.Router();
const Service = require('../../../models/Services');




router.post('/',

    async (req, res) => {
        const serviceId = req.body;
        try {

            await Service.findOneAndDelete({ _id: serviceId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(serviceId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router