const express = require('express');
const router = express.Router();
const Faqs = require('../../../models/Faqs');





router.post('/',

    async (req, res) => {
        let data = await req.body;


        try {
            const result = Faqs.updateMany({ id: data.id },
                { id: data.id, question: data.question, answer: data.answer, status: data.status }, function (err) {
                    if (err) console.log(err);
                });
            res.send()
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }


    });

module.exports = router