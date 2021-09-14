const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./galleryRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;

