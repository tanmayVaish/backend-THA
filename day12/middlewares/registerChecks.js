const { emailValidate, passwordValidate } = require("../utils/validate");
const registerInitialCheck = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (typeof email !== 'string' || typeof password !== 'string' || typeof confirmPassword !== 'string') {
        res.status(401).send("Type Error Failed!");
    }
    else if (email.length < 0 || password.length < 8 || confirmPassword.length < 8) {
        res.status(401).send("length error!");
    }else if (confirmPassword !== password) {
        res.status(401).send("passwords do not match!");
    }else if (!emailValidate(email)) {
        res.status(401).send("invalid Email: "+email);
    }else if (!passwordValidate(password)) {
        res.status(401).send("invalid password");
    }else{
        next();
    }
}

module.exports = registerInitialCheck;