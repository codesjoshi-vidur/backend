import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export const environment = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
} as const;

export const env = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
  IS_PRODUCTION: process.env.NODE_ENV == environment.PRODUCTION ? true : false,
  NODE_ENV: process.env.NODE_ENV,
  DB_NAME : process.env.DB_NAME,
  DB_USERNAME : process.env.DB_USERNAME,
  DB_HOST : process.env.DB_HOST,
  DB_PORT : Number(process.env.DB_PORT),
  DB_PASSWORD : process.env.DB_PASSWORD
} as const;

export const pool = new Pool({
  user : env.DB_USERNAME,
  database : env.DB_NAME,
  host : env.DB_HOST,
  port : env.DB_PORT,
  password : env.DB_PASSWORD
})