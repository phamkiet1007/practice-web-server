const express = require('express');

const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', './views');
    app.use(express.static('public'));
}

module.exports = configViewEngine;