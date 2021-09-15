const router = require('express').Router();
const userRoutes = require('./user-routes');
const statusRoutes = require('./status-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/status', statusRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

