const User = require('../models/user')


const hello = async (req, res) => {
  return res.status(200).json({
    message: "Hello World!",
  });
};


const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { username, email, isActive, contacts } = req.body;

    await User.findByIdAndUpdate(id, { username, email, isActive, contacts })
  
  return res.status(200).json({
    status: "Success",
    message: "Hello World!",
    data: null
  });
};

module.exports = {
  hello,
  userUpdate,
};
