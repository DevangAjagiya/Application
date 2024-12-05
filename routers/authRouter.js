const express = require('express');

const authRouter = express.Router();

router.post('/singup', (req, res) => {
  res.json({ message: 'singup Success' });
});

module.exports= authRouter;  