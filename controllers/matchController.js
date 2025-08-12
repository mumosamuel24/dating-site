const User = require('../models/User');

exports.discover = async (req, res) => {
  const me = await User.findById(req.user.id);
  const users = await User.find({
    _id: { $ne: me._id },
    gender: me.preferences.gender,
    age: { $gte: me.preferences.ageRange[0], $lte: me.preferences.ageRange[1] },
    interests: { $in: me.interests }
  }).limit(50);
  res.json(users);
};
