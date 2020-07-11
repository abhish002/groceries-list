const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 9000;

const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(path.join(publicPath)));

app.get('/', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});