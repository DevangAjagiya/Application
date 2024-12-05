const express = require('express');

const app = express();
app.use (express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});  

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); 

