const express = require('express');
const router = express.Router();
const Faqs = require('../../../models/Faqs');



router.post('/',

    async (req, res) => {
        const faqId = req.body;
        try {

            await Faqs.findOneAndDelete({ _id: faqId.id }, function (err) {
                if (err) console.log(err);

            });
            res.send(faqId)

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error...')
        }




    });

module.exports = router