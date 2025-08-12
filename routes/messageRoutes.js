const router = require('express').Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');
router.post('/', auth, sendMessage);
router.get('/', auth, getMessages);
module.exports = router;
