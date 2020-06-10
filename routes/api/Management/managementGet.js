const express = require('express');
const router = express.Router();
const Management = require('../../../models/Management');





router.get('/',

    async (req, res) => {


        try {

            const data = await Management.find();
            res.send(data);


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router