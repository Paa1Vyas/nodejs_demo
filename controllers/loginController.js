const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function loginUser(req, res) {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(401).json({ error: "Invalid credentials" });
                    }

                    const payload = {
                        id: user._id,
                        email: user.email
                    };

                    const token = jwt.sign(
                        payload,
                        process.env.JWT_SECRET || 'my_super_secret_key',
                        { expiresIn: '1h' }
                    );

                    res.status(200).json({
                        message: "Login successful",
                        token: token
                    });
                });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
}

module.exports = loginUser;
