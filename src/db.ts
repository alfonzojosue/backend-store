import { DataSource } from "typeorm";
import { User } from "./Models/User";
import { Product } from "./Models/Products";


export const AppDateSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "store",
    entities: [User, Product],
    synchronize: true
})