import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// All Api's
app.use("/api/user")

app.listen(3000, () => {
    console.log("The server is started to listen!")
})