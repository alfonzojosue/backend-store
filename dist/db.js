"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDateSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./Models/User");
const Products_1 = require("./Models/Products");
exports.AppDateSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "store",
    entities: [User_1.User, Products_1.Product],
    synchronize: true
});
