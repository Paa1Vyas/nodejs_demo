const app = require('express').Router();
const calcController = require('../controllers/calcController');
app.get('/:choice', calcController);
module.exports = app;