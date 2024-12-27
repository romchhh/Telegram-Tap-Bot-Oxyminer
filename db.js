import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

export { DataTypes };
