const express = require('express');
const path = require('path');

// App
const app = express();
app.use('/reactapp', express.static('build'));

app.get('/reactapp', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/reactapp/ping', (req, res) => {
  return res.send('pong');
});

const PORT = 9999;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
