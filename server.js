import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize, User } from './db.js'; 
import cors from 'cors';
import { UserService } from './user-service/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ініціалізація userRepository
const userRepository = {
  async getById(id) {
    return await User.findByPk(id);
  },
  async update(id, data) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    return null;
  },
  async create(data) {
    return await User.create(data);
  },
};

// Ініціалізація userService
const userService = new UserService(userRepository);

export const app = express();

const port = process.env.PORT || 3000; 
app.use(cors());

// Шлях до зібраного React-додатка
const reactBuildPath = path.join(__dirname, 'dist');

// Middleware для роботи з JSON
app.use(express.json());

// API: Отримання користувача
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    user ? res.json(user) : res.status(404).send('User not found');
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Internal server error');
  }
});

// API: Оновлення даних користувача
app.patch('/api/users/:id', async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    user ? res.json(user) : res.status(404).send('User not found');
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send('Error updating user');
  }
});

// API: Оновлення points користувача
app.patch('/api/users/:id/points', async (req, res) => {
  try {
    const { points } = req.body;
    if (typeof points !== 'number') {
      return res.status(400).send('Invalid points value. Must be a number.');
    }

    const user = await userService.updateUser(req.params.id, { points });
    user ? res.json({ points: user.points }) : res.status(404).send('User not found');
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
const server = app.listen(port, async () => {
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

export { server };
