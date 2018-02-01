

const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./index.js');

//settings 
app.set('port', process.env.PORT || '4200');

//midleware 
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extend: false}));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'));

});