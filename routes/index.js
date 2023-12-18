import express from "express";
import {getUser, Register, Login, Logout} from "../controller/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js";
import { refershToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refershToken);
router.delete('/Logout', Logout);

export default router;