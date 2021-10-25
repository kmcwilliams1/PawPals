const router = require('express').Router();
const session = require('express-session');
const { User, Post, Comment } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: { userID: req.session.userID },
      attributes: [
        'id',
        'description',
        'date_created',
        'userID',
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
    res.render('homepage', { posts , logged_in:req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ['id',
        'description',
        'date_created',
        'userID'
      ],
      include: [{
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'body', 'post_id', 'userID', 'date_created'],
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
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
