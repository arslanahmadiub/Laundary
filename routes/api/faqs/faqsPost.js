const express = require('express');
const router = express.Router();
const Faqs = require('../../../models/Faqs');



router.post('/',


    async (req, res) => {
        const { id, question, answer, status } = req.body;

        try {
            let faqs = new Faqs({
                id: id,
                question: question,
                answer: answer,
                status: status
            });
            await faqs.save();
            res.send(faqs);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }

    });

module.exports = router