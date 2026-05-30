function addconttroller(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sum = a + b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);
}
module.exports = addconttroller;