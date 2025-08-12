const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, req.body);
  res.json({ message: 'Updated' });
};
