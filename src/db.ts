import { DataSource } from "typeorm";
import { User } from "./Models/User";


export const AppDateSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "store",
    entities: [User],
    synchronize: true
})