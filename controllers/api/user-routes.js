const router = require('express').Router();
const { User , Post , Comment } = require('../../models');

// Sign up
router.post('/', async (req, res) => {
  console.log("this is a test of the signup route")
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userID = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  console.log("this is a test of the login route ")
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.userID = dbUserData.id;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


//update bio
router.put('/bio', async (req, res) =>{
  try {    
    const dbUserData = await User.findOne({
    where: {
     id: req.session.userId,
    },
  });

  const userBio = await User.update(req.body.bio , {
    where: {
      id : dbUserData.id
    }
  });
console.log(userBio)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//view dashboard
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { userID: req.session.userID },
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
    res.json({posts})
    res.render('dashboard', { posts });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
