const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Вказуємо, де зберігаються статичні файли React
app.use(express.static(path.join(__dirname, 'oxyble-frontend/build')));

// Обробка всіх запитів
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'oxyble-frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
