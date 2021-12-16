const express = require('express');
const router = express.Router();
const messageError = require('../utilities/Error');
const User = require('../models/User');


router.post('/register',
    async (req, res) => {
        const { firstname, lastname, password, email } = req.body
        if (!firstname || !lastname || !password || !email) {
            return messageError(400, "Some Fields are missing!", res)
        }
        try {
            if (await User.exists({ email })) return messageError(403, "User already exist!", res)
            const user = await new User(req.body).save();
            res.status(201).send(user);
        } catch (e) {
            messageError(500, e.message, res)
        }
    }
);

router.post('/login',
    async (req, res) => {
        const { email, password } = req.body
        console.log(req.body);
        if (!email || !password) {
            return messageError(400, "Some Fields are missing!", res)

        }
        try {
            const user = await User.findOne({ email })
            if (!user) return messageError(404, "User not found!", res)
            if (user.password !== password) return messageError(401, "Wrong password!", res)
            console.log(user)
            res.status(200).send(user);
        } catch (e) {
            messageError(500, e.message, res)
        }

    }
);

module.exports = router;
