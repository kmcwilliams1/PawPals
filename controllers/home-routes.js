const router = require('express').Router();
const { User, Status, Comment } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const statusData = await Status.findAll({
      attributes: [
        'id',
        'description',
        'date_created'
    ],
    include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'status_id', 'user_id', 'date_created'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    });

    const posts = statusData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/status/:id', async (req, res) => {
  try {
    const statusData = await Status.findByPk(req.params.id, {
    where: {
        id: req.params.id
    },
    attributes: ['id',
        'description',
        'date_created'
    ],
    include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'status_id', 'user_id', 'date_created'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    });

    if (statusData) {
      const status = statusData.get({ plain: true });

      res.render('single-post', { post });  // handlebars
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
