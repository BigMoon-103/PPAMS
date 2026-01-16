const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`  P.P.A.M.S. Website is now running!`);
  console.log(`  Open: http://localhost:${PORT}`);
  console.log(`========================================`);
});