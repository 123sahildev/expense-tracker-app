import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config()

export const MysqlConnection = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "expense-tracker-app",
    password: "123mymysql"
}).promise()

