const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat"
    }
  },
  { timestamps: true }
);

const Message = new mongoose.model("Message", MessageSchema);

module.exports = Message;
