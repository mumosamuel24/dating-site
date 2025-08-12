const Connection = require('../models/Connection');

exports.likeUser = async (req, res) => {
  const { targetUserId } = req.body;
  let connection = await Connection.findOne({
    $or: [
      { userA: req.user.id, userB: targetUserId },
      { userA: targetUserId, userB: req.user.id }
    ]
  });

  if (connection) {
    if (connection.status === 'pending') {
      connection.status = 'accepted';
      await connection.save();
    }
  } else {
    connection = new Connection({
      userA: req.user.id,
      userB: targetUserId,
      status: 'pending'
    });
    await connection.save();
  }

  res.json({ status: connection.status });
};
