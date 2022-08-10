const express = require('express');
const Sneakers = require('../models/Sneakers');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await Sneakers.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({ message: 'An error has occurred on the server. Try later' });
  }
});

router.get('/:sneakersId', async (req, res) => {
  try {
    const sneakersId = req.params.sneakersId;
    const foundSneakers = await Sneakers.findById(sneakersId);
    res.status(200).send(foundSneakers);
  } catch (e) {
    res.status(500).json({ message: 'An error has occurred on the server. Try later' });
  }
});

module.exports = router;
