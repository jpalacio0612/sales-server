import "dotenv/config";
import type { Knex } from "knex";

const config: {
  [key: string]: Knex.Config;
} = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: parseInt(process.env.DB_PORT || "5432", 10),
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "admin",
      database: process.env.DB_NAME || "sales",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

export default config;
