import { sequelize } from './db.js';
import User from './models/User.js';
import Friend from './models/Friend.js';
import NFT from './models/NFT.js';

(async () => {
  try {
    // Синхронізація моделей
    await sequelize.sync({ force: true });

    // Додавання тестових даних
    const user = await User.create({
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      level: 5,
      points: 1500,
    });

    await Friend.create({ userId: user.id, friendId: 2 });
    await NFT.create({
      userId: user.id,
      name: 'Rare NFT',
      description: 'Limited Edition',
      image: 'https://via.placeholder.com/150',
      gettingDate: new Date(),
    });

    console.log('Database initialized successfully!');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    process.exit();
  }
})();
