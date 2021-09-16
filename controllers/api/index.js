const router = require('express').Router();
const userRoutes = require('./user-routes');
const statusRoutes = require('./status-routes');
const commentRoutes = require('./comment-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/status', statusRoutes);
router.use('/comment', commentRoutes);
router.use('/message', messageRoutes);

module.exports = router;

