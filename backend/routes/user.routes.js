import express from "express";
import * as userController from "../controller/user.controller.js";
import { isAuthenticate } from "../middleware/isAuth.js";

const userRouter = express.Router();

userRouter.post("/register", userController.register);

userRouter.post("/login", userController.login);

userRouter.post("/me", isAuthenticate, userController.me);

export default userRouter;
