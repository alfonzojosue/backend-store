import { Sequelize, DataTypes, Model } from 'sequelize';
import { UserAttributes } from './interface/users.interface';

const sequelize = new Sequelize('sqlite::memory:');

class User extends Model<UserAttributes>{}

User.init(
    {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    banned:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    img: {
        type:DataTypes.STRING,
        defaultValue: ""

    },
    deleteAt:{
        type: DataTypes.STRING,
    }
    },
    {sequelize}
)