"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sqlite::memory:');
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    banned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ""
    },
    deleteAt: {
        type: sequelize_1.DataTypes.STRING,
    }
}, { sequelize });
