const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { receiver, content, type } = req.body;
  const msg = new Message({ sender: req.user.id, receiver, content, type });
  await msg.save();
  res.status(201).json(msg);
};

exports.getMessages = async (req, res) => {
  const { withUser } = req.query;
  const messages = await Message.find({
    $or: [
      { sender: req.user.id, receiver: withUser },
      { sender: withUser, receiver: req.user.id }
    ]
  }).sort('timestamp');
  res.json(messages);
};
