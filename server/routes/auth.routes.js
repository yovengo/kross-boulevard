const express = require('express');
const router = express.Router({ mergeParams: true });

router.post('/signUp', async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: 'An error has occurred on the server. Try later',
    });
  }
});
router.post('/signInWithPassword', async (req, res) => {});
router.post('/token', async (req, res) => {});

module.exports = router;
