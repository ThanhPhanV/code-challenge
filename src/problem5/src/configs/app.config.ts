import dotenv from "dotenv";
import { IAppEnv } from "../interfaces/app-env.interface";
dotenv.config();

export const AppConfig: IAppEnv = {
  NODE_ENV: process.env.NODE_ENV,
  DB_TYPE: process.env.DB_TYPE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER_NAME: process.env.DB_USER_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_SYNC: process.env.DB_SYNC,
  DB_ENABLE_LOG: process.env.DB_ENABLE_LOG,
};
