import { sequelize, DataTypes } from '../db.js';

const Friend = sequelize.define(
  'Friend',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default Friend;
