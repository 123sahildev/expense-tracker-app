import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// All Api's
// app.use("/api/user")
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MYSQL_PASSWORD)

app.listen(3000, () => {
    console.log("The server is started to listen!")
})