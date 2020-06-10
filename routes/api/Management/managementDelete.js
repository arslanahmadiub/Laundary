const express = require('express');
const router = express.Router();
const Management = require('../../../models/Management');






router.post('/',

    async (req, res) => {
        const managementId = req.body;
        try {

            await Management.findOneAndDelete({ _id: managementId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(managementId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router