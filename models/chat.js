const mongoose = require("mongoose");
const User = require("./user");
const Message = require("./message");

const ChatSchema = new mongoose.Schema(
  {
    users: {
      type: [User],
      required: true,
    },
    messages: {
      type: [Message],
      required: true,
    },
  },
  { timestamps: true }
);

const Chat = new mongoose.model("Chat", ChatSchema);

module.exports = Chat;
