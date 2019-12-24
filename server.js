const express = require('./node_modules/express');
const path = require('path');

// App
const app = express();
app.use('/baseapp', express.static('build'));

app.get('/baseapp/ping', (req, res) => {
  return res.send('pong');
});

app.get('/baseapp/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 9999;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
