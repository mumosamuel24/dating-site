const router = require('express').Router();
const { discover } = require('../controllers/matchController');
const auth = require('../middleware/authMiddleware');
router.get('/discover', auth, discover);
module.exports = router;
