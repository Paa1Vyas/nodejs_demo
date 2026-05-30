const bcrypt = require('bcryptjs');

function createUser(req, res) {
    const User = require('../models/User');
    const { name, email, department, age, password } = req.body;

    if (!password) {
        return res.status(400).json({ error: "Password is required" });
    }

    bcrypt.hash(password, 10)
        .then((hashedPassword) => {
            const user = new User({
                name,
                email,
                department,
                age,
                password: hashedPassword
            });
            return user.save();
        })
        .then((savedUser) => {
            res.status(201).json({ message: "User created successfully", user: savedUser });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}
function getUser(req, res, id) {
    const User = require('../models/User');
    User.findById(id)
        .then((user) => {
            console.log(user);
            res.send(user);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Error fetching data" });
        });
}
module.exports = { createUser, getUser };