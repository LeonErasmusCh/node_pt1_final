const User = require("../models/user")


const hello = async (req, res) => {
    return res.status(200).json({
        message: 'Hello World!'
    })
}

const createHere = async (req, res) => {
    return res.status(200).json({
        message: 'This route is ok!'
    })
}

const createUser = async (req, res) => {

    const { username, email, password } = req.body;

    const newUser = await User.create({ username, email, password });

    const user = await newUser.save()

    return res.status(201).json({
        status: "Success!",
        message: 'User created',
        data: user
    })
}


module.exports = {
hello,
 createUser,
 createHere
}