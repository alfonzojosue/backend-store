import { Sequelize, DataTypes, Model } from 'sequelize';
import { ProductAttributes } from './interface/products.interface';

const sequelize = new Sequelize('sqlite::memory:');

class Product extends Model<ProductAttributes> {}
Product.init(
    {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value: string) {
        this.setDataValue('name', value.toUpperCase());
        },
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    }
    },
    { sequelize }
);

export default Product;
