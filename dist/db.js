import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pg.Pool;
var connection = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: Number(process.env.DATABASE_PORT),
    password: process.env.DATABASE_PASSWORD,
    database: "concertswishlist"
});
export default connection;
