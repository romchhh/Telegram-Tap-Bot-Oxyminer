import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize, User } from './db.js'; // Ваші моделі

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Шлях до зібраного React-додатка
const reactBuildPath = path.join(__dirname, 'dist');

// Middleware для роботи з JSON
app.use(express.json());

// API: Отримання користувача
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user ? res.json(user) : res.status(404).send('User not found');
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Internal server error');
  }
});

// API: Оновлення даних користувача
app.patch('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send('Error updating user');
  }
});

// API: Оновлення points користувача
app.patch('/api/users/:id/points', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');

    const { points } = req.body;
    if (typeof points !== 'number') {
      return res.status(400).send('Invalid points value. Must be a number.');
    }

    user.points = points;
    await user.save();

    res.json({ points: user.points });
  } catch (err) {
    console.error('Error updating points:', err);
    res.status(500).send('Error updating points');
  }
});

// Обслуговування статичних файлів
app.use(express.static(reactBuildPath));

// Підтримка React Router (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

// Запуск сервера
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('React build path:', reactBuildPath);

  // Перевірка з'єднання з базою даних
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});
