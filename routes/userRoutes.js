
const app = require('express').Router();
const userController = require('../controllers/userController');
const getdata = require('../controllers/getData');
const loginController = require('../controllers/loginController');
const verifyToken = require('../middlewares/authMiddleware');

app.post('/addUser', userController.createUser);
app.post('/login', loginController);
app.get('/getUsers', verifyToken, getdata);
app.get('/getUser/:id', verifyToken , (req, res) => {
    userController.getUser(req, res, req.params.id);
})

module.exports = app;
