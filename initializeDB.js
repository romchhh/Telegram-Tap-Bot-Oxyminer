import { sequelize, User } from './db.js';

(async () => {
  await sequelize.sync({ alter: true });

  await User.create({
    name: 'Test User',
    avatar: 'https://via.placeholder.com/150',
    level: 1,
    points: 0,
  });

  console.log('Database initialized!');
})();
