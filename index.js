import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js"
import router from "./routes/index.js";
// import Users from "./models/UserModel.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('database connected...');
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));