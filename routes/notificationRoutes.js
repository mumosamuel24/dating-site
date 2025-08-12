const router = require('express').Router();
const { getNotifications, markSeen } = require('../controllers/notificationController');
const auth = require('../middleware/authMiddleware');
router.get('/', auth, getNotifications);
router.put('/seen', auth, markSeen);
module.exports = router;


