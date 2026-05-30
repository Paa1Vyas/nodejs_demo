
const app = require('express').Router();
const addController = require('../controllers/addController');

app.get('/add', addController);

module.exports = app;