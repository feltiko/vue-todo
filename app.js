'use strict';

const express = require('express');
const path = require('path');

const PORT = 1337;

const app = express();

//[ROUTERS]
const index = require('./public/routes/index');

app.set('port', PORT);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(app.get('port'), () => {
    console.log('Server already available on http://localhost:' + app.get('port') + '/');
});

module.exports = app;