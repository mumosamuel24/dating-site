const router = require('express').Router();
const { likeUser } = require('../controllers/connectionController');
const auth = require('../middleware/authMiddleware');
router.post('/like', auth, likeUser);
module.exports = router;
