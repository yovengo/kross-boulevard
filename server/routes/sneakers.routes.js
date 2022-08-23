const express = require('express');
const auth = require('../middleware/auth.middleware');
const Sneakers = require('../models/Sneakers');
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(async (req, res) => {
    try {
      const list = await Sneakers.find();
      res.status(200).send(list);
    } catch (error) {
      res.status(500).json({ message: 'An error has occurred on the server. Try later' });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newSneakers = await Sneakers.create({
        ...req.body,
      });
      res.status(201).send(newSneakers);
    } catch (error) {
      res.status(500).json({ message: 'An error has occurred on the server. Try later' });
    }
  });

router
  .route('/:sneakersId')
  .delete(auth, async (req, res) => {
    try {
      const { sneakersId } = req.params;
      const removedSneakers = await Sneakers.findById(sneakersId);

      const userId = req.user._id;

      if (userId) {
        await removedSneakers.remove();
        return res.send(null);
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (error) {
      res.status(500).json({ message: 'An error has occurred on the server. Try later' });
    }
  })
  .put(auth, async (req, res) => {
    try {
      const { sneakersId } = req.params;

      if (sneakersId) {
        const updatedSneakers = await Sneakers.findByIdAndUpdate(sneakersId, req.body, {
          new: true,
        });
        res.send(updatedSneakers);
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (error) {
      res.status(500).json({ message: 'An error has occurred on the server. Try later' });
    }
  });

module.exports = router;
