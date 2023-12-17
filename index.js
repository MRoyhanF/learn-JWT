import express from "express";
import db from "./config/Database.js"
const app = express();

try {
    await db.authenticate();
    console.log('database connected...');
} catch (error) {
    console.log(error);
}

app.listen(5000, ()=> console.log('Server running at port 5000'));