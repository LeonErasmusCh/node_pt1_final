const User = require("../models/user");

const hello = async (req, res) => {
  return res.status(200).json({
    message: "Hello World!",
  });
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({ username, email, password });

  const user = await newUser.save();

  return res.status(201).json({
    status: "Success!",
    message: "User created",
    data: user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, isActive, contacts } = req.body;
  await User.findByIdAndUpdate(id, { username, email, isActive, contacts });

  return res.status(200).json({
    status: "Success",
    message: "User updated",
    data: { username, email, isActive, contacts },
  });
};

const addContact = async (req, res) => {
  const { id } = req.params;
  const { contact_id } = req.body;

  const newContact = await User.findByIdAndUpdate(id, { contacts: [contact_id] });
  const updatedContact = await newContact.save();

  return res.status(200).json({
    status: "Success",
    message: "Contact added successfully",
    data: null,
  });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    await User.findOne({username: username}).exec(function(error, user) {
        if (error) {
            callback({error: true})
        } else if (!user) {
            callback({error: true})
        } else {
            user.comparePassword(password, function(matchError, isMatch) {
                if (matchError) {
                    callback({error: true})
                } else if (!isMatch) {
                    callback({error: true})
                } else {
                    callback({success: true})
                }
            })
        }
    })
}

const loginRoute = async (req, res) => {
    return res.status(200).json({
        message: "You can login here!",
      });
}


module.exports = {
  hello,
  createUser,
  updateUser,
  loginUser,
  loginRoute,
  addContact
};
