const router = require('express').Router();
const { Gallery } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a new Gallery post
router.post('/', withAuth, async (req, res) => {
  try {
    const newGallery = await Gallery.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGallery);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes an existing Gallery post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const galleryData = await Gallery.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!galleryData) {
      res.status(404).json({ message: 'No Gallery found with this id!' });
      return;
    }

    res.status(200).json(galleryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;