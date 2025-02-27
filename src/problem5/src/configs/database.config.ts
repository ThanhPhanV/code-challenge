import { DataSourceOptions } from "typeorm";
import { AppConfig } from "./app.config";

export const DatabaseConfig: DataSourceOptions = {
  type: AppConfig.DB_TYPE as unknown as any,
  host: AppConfig.DB_HOST,
  port: parseInt(AppConfig.DB_PORT as unknown as string),
  username: AppConfig.DB_USER_NAME,
  password: AppConfig.DB_PASSWORD,
  database: AppConfig.DB_NAME,
  synchronize: AppConfig.DB_SYNC === "true",
  logging: AppConfig.DB_ENABLE_LOG === "true",
};
