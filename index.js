//imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./server/routes/devices');
const path = require('path');

//Callling imports and placing 
const app = express()
const port = 3000;


//This is the view engine to help direct the website using and routing through the views file 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Mongoose connection using mongodb url compass 
mongoose.connect('mongodb://localhost:27017/usertrack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Static routes 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/devices', routes);


//The indexap file uses index.js to display the actual information
app.get('/', (req, res) => {
    res.render('indexap');
});

//Listening to the port number 3000
app.listen(port, () => {
    console.log('server is runnning on port ${port}');
});




