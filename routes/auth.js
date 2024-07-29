const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post("/", [
    body("name", "Must enter minimum 5 characters").isLength({min:5}),
    body("email", "please enter a valid email").isEmail(),
    body("password", "Must enter minimum 5 characters").isLength({min:5})
], (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json({ message: `user registered successfully ${req.body.name} ${req.body.email}` }))
        .catch(err => {console.log(err);
            res.status(500).json({error:"please enter unique values"})
        })

})

module.exports = router;