

function getData(req, res) {
    const user = require('../models/User');
    user.find()
        .then((users) => {
            console.log(users);
            res.send(users);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Error fetching data" });
        });
}

module.exports = getData;