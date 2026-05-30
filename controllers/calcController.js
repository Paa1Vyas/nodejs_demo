function calcController(req, res) {
    let choice = req.params.choice;
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let result;
    switch(choice) {
        case 'add':
            result = a + b;
            res.send(`The sum of ${a} and ${b} is ${result}`);
            break;
        case 'sub':
            result = a - b;
            res.send(`The difference of ${a} and ${b} is ${result}`);
            break;
        case 'mul':
            result = a * b;
            res.send(`The product of ${a} and ${b} is ${result}`);
            break;
        
        case 'div':
            result = a / b;
            res.send(`The quotient of ${a} and ${b} is ${result}`);
            break;
        default:
            res.status(400).send('Invalid choice');
    }
}
module.exports = calcController;