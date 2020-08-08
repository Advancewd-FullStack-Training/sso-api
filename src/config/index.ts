import * as path from "path";

const envPath = path.join(__dirname, `../../.env.${process.env.NODE_ENV}`)

require("dotenv").config({ path: envPath })

export const config = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}