const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id });
  res.json(notifications);
};

exports.markSeen = async (req, res) => {
  await Notification.updateMany({ user: req.user.id }, { seen: true });
  res.json({ message: 'All marked as seen' });
};
