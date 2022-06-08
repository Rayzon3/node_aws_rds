import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database-1.cdif4m5sp5x5.ap-south-1.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "my_db",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
