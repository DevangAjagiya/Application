const express = require('express');

// Use authRouter instead of router
const authRouter = express.Router();

authRouter.post('/signup', (req, res) => {
  res.json({ message: 'Signup Success' });
});

module.exports = authRouter;