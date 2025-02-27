import { DataSource } from "typeorm";
import { Task } from "../entities/task.entity";

// Database
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "db",
  synchronize: false,
  logging: true,
  entities: [Task],
  subscribers: [],
  migrations: [],
});
