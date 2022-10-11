const { exists } = require("../models/user");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const Message = require("../models/message");
const Chat = require("../models/chat");

const hello = async (req, res) => {
  return res.status(200).json({
    message: "Hello World!",
  });
};

const createUser = async (req, res) => {
    const body = req.body;

    if(!(body.email && body.password && body.username)) {
        return res.status(400).json({
            status: "Error",
            message: "All fields are required!"
        })
    }
    const user = new User(body);

    const salt =await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).json({
        status: "Success!",
        message: "User created",
        data: user
    }))
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
  
  const newContact = await User.findById(id);
  if (newContact) {
    newContact.contacts.push(contact_id)

    await newContact.save();
  
    return res.status(200).json({
      status: "Success",
      message: "Contact added successfully",
      data: contact_id,
    });
  } else {
    return res.status(404).json({
        status: "Error",
        message: "User not found"
    })
  }
};

const loginUser = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (validPassword) {
            user.isActive == true;
            await user.save();
            return res.status(200).json({
                status: "Success!",
                message:"Succesfully logged in",
                data: user
            })
        } else {
            return res.status(400).json({
                status: "Error",
                message: "Wrong password"
            })
        }
    } else {
        return res.status(404).json({
            status: "Error",
            message: "User not found"
        })
    }
}

const logoutUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    if (user) {
        user.isActive == false;
        await user.save()
        return res.status(200).json({
            status: "Success",
            message: "Succesfully logged out"
        })
    } else {
        return res.status(404).json({
            status: "Error",
            message: "User not found"
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user_deleted = await User.deleteOne({_id: id }) 
    if (user_deleted) {
        return res.status(200).json({
            status: "Success",
            message: "User has been deleted"
        })
    } else {
        return res.status(404).json({
            status: "Error",
            message: "User not found"
        })
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const user_info = await User.findById(id)
    if (user_info) {
        return res.status(200).json({
            status: "Success",
            message: "User found",
            data: user_info
        })
    } else {
        return res.status(404).json({
            status: "Success",
            message: "User not found"
        })
    }
}

const getUserContacts = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    if (user) {
        return res.status(200).json({
            status: "Succes",
            message: "User found",
            data: user.contacts
        })
    } else {
        return res.status(404).json({
            status: "Error",
            message: "User not found"
        })
    }
}

const getContactInfo = async (req, res) => {
    const { id } = req.params
    const { contact_id } = req.body
    const user = await User.findById(id)
    if (user) {
        const contact = await User.findById(contact_id)
        if (contact) {
            return res.status(200).json({
                status: "Success",
                message: "Contact found",
                data: contact
            })
        } else {
            return res.status(404).json({
                status: "Error",
                message: "Contact not found"
            })
        }
    } else {
        return res.status(404).json({
            status: "Error",
            message: "User not found"
        })
    }

}

const startChat = async (req, res) => {
    const { id_1, id_2, message_content } = req.body
    console.log(req.body.message_content)
    const user_1 = await User.findById(id_1)
    if (user_1) {
        const user_2 = await User.findById(id_2)
        if (user_2) {
            const message = new Message({ user: user_1, content: message_content })
            message.save()
            const newChat = new Chat({ users: [user_1, user_2], messages: [message] })
            newChat.save()
            
            return res.status(201).json({
                status: "Success",
                message: "New chat created",
                data: newChat
            })
        } else {
            return res.status(404).json({
                status: "Error",
                message: "Recipient not found"
            })
        }
    } else {
        return res.status(404).json({
            status: "Error",
            message: "Sender not found"
        })
    }
}

module.exports = {
  hello,
  createUser,
  updateUser,
  loginUser,
  logoutUser,
  addContact,
  deleteUser,
  getUser,
  getUserContacts,
  getContactInfo,
  startChat
};
