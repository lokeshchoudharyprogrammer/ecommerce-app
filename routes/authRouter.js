import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { MustBeSigned, isAdmin } from "../middlewares/authMiddlewares.js";

const authrouter = express.Router()

// routing

authrouter.post("/register", registerController)


authrouter.post("/login", loginController)

authrouter.get("/test", MustBeSigned, isAdmin, testController)


export default authrouter