const express = require('express');
const connectDB = require('./config/db')
const path = require('path')
const app = express();

// Connect Database

connectDB();

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


// app.get('/', (req, res) => res.send('Api Running'));


// services route

app.use('/servicePost', require('./routes/api/services/servicePost'));
app.use('/serviceGet', require('./routes/api/services/serviceGet'));
app.use('/serviceDelete', require('./routes/api/services/serviceDelete'));
app.use('/serviceUpdate', require('./routes/api/services/serviceUpdate'));

// category route

app.use('/categoryPost', require('./routes/api/categories/categoryPost'));
app.use('/categoryGet', require('./routes/api/categories/categoryGet'));
app.use('/categoryDelete', require('./routes/api/categories/categoryDelete'));
app.use('/categoryUpdate', require('./routes/api/categories/categoryUpdate'));

// product route
app.use('/productPost', require('./routes/api/products/productsPost'));
app.use('/productGet', require('./routes/api/products/productsGet'));
app.use('/productDelete', require('./routes/api/products/productDelete'));
app.use('/productUpdate', require('./routes/api/products/productUpdate'));

// management route

app.use('/managementPost', require('./routes/api/Management/managementPost'));
app.use('/managementGet', require('./routes/api/Management/managementGet'));
app.use('/managementDelete', require('./routes/api/Management/managementDelete'));
app.use('/managementUpdate', require('./routes/api/Management/managementUpdate'));

// customer route

app.use('/customerPost', require('./routes/api/customers/customerPost'));
app.use('/customerGet', require('./routes/api/customers/customerGet'));

// delivery Boys route

app.use('/deliveryBoyPost', require('./routes/api/DeliveryBoys/deliveryBoysPost'));
app.use('/deliveryBoyGet', require('./routes/api/DeliveryBoys/deliveryBoysGet'));
app.use('/deliveryBoyUpdate', require('./routes/api/DeliveryBoys/deliveryBoysUpdate'));
app.use('/deliveryBoyDelete', require('./routes/api/DeliveryBoys/deliveryBoysDelete'));

// promo codes route

app.use('/promoCodePost', require('./routes/api/PromoCodes/promoCodePost'));
app.use('/promoCodeGet', require('./routes/api/PromoCodes/promoCodesGet'));
app.use('/promoCodeDelete', require('./routes/api/PromoCodes/promoCodeDelete'));
app.use('/promoCodeUpdate', require('./routes/api/PromoCodes/promoCodeUpdate'));

// labels route

app.use('/labelsPost', require('./routes/api/labels/labelsPost'));
app.use('/labelsGet', require('./routes/api/labels/labelsGet'));
app.use('/labelsDelete', require('./routes/api/labels/labelsDelete'));
app.use('/labelsUpdate', require('./routes/api/labels/labelsUpdate'));

// faqs route

app.use('/faqsPost', require('./routes/api/faqs/faqsPost'));
app.use('/faqsGet', require('./routes/api/faqs/faqsGet'));
app.use('/faqsUpdate', require('./routes/api/faqs/faqsUpdate'));
app.use('/faqsDelete', require('./routes/api/faqs/faqsDelete'));

// server static accet in production 
if (process.env.NODE_ENV === 'production') {

    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`))