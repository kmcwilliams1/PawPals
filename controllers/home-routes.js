const router = require('express').Router();
const session = require('express-session');
const { User, Post, Comment } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: { user_id: req.session.user_id },
      attributes: [
        'id',
        'description',
        'date_created'
      ],
      include: [
        {
          model: Comment, include: [
            User
          ]
        },
        User
      ]
    }
    );

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
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
        attributes: ['id', 'body', 'post_id', 'user_id', 'date_created'],
        include: {
          model: User,
          attributes: ['username']
        }
      }]
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('post', { post });  // handlebars
    } else {
      res.post(404).end();
    }
  } catch (err) {
    res.post(500).json(err);
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
