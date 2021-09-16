const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', async (req, res) =>{
    const messageData = await Message.findOne(
      {where: {
        id: req.params.id
    }},
    ).catch((err) => { 
      res.json(err);
    });
    const messages = messageData.map((message) => message.get({ plain: true }));
    res.render('dashboard', { messages });
    });



router.post('/', async (req, res) => {
  // create a new message
  try {
    const messageData = await Message.create({
        id: req.params.id
    });
    res.status(200).json(messageData);
  } catch (err) {
    res.status(400).json(err);
  }
});
   
router.delete('/:id', async (req, res) => {
    // delete message by its `id` value
    try{
      const messageData = await Message.destroy({
        where: {
          id: req.params.id
        },
      })
      res.status(200).json(messageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;