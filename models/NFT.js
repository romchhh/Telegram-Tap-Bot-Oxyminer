import { sequelize, DataTypes } from '../db.js';

const NFT = sequelize.define('NFT', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gettingDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});

export default NFT;
