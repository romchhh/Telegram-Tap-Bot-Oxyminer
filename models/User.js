import { sequelize, DataTypes } from '../db.js';
import NFT from './NFT.js';
import Friend from './Friend.js';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  },
);

// Зв'язки
User.hasMany(NFT, { foreignKey: 'userId', onDelete: 'CASCADE' });
NFT.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Friend, { foreignKey: 'userId', onDelete: 'CASCADE' });
Friend.belongsTo(User, { foreignKey: 'userId' });

export default User;
