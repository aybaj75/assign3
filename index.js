//imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./server/routes/devices');
const path = require('path');

const app = express()
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost:27017/usertrack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/devices', routes);

app.get('/', (req, res) => {
    res.render('indexap');
});

app.listen(port, () => {
    console.log('server is runnning on port ${port}');
});




