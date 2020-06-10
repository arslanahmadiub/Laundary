const express = require('express');
const router = express.Router();
const Service = require('../../../models/Services');



router.post('/',


    async (req, res) => {
        const { id, serviceName, description, status } = req.body;

        try {
            let service = new Service({
                id: id,
                serviceName: serviceName,
                description: description,
                status: status
            });
            await service.save();
            res.send(service);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router