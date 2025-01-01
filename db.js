import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('sqlite:./database.db', {
  logging: (msg) => console.log(`[SQL]: ${msg}`), 
});


// Модель користувача
export const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
  level: { type: DataTypes.INTEGER, defaultValue: 1 },
  points: { type: DataTypes.INTEGER, defaultValue: 0 },
});

// Модель друга
export const Friend = sequelize.define('Friend', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ownerId: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
  level: { type: DataTypes.INTEGER, defaultValue: 1 },
  points: { type: DataTypes.INTEGER, defaultValue: 0 },
});

// Модель NFT
export const NFT = sequelize.define('NFT', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ownerId: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  gettingDate: { type: DataTypes.DATE },
});

// Зв'язки між моделями
User.hasMany(Friend, { foreignKey: 'ownerId' });
User.hasMany(NFT, { foreignKey: 'ownerId' });
Friend.belongsTo(User, { foreignKey: 'ownerId' });
NFT.belongsTo(User, { foreignKey: 'ownerId' });

// Синхронізація бази
await sequelize.sync();
