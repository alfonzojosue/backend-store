"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDateSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDateSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "store",
    entities: [],
});
