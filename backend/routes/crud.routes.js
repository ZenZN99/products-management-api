import * as crudController from "../controller/crud.controller.js";
import express from "express";
import { isAuthenticate } from "../middleware/isAuth.js";

const crudRouter = express.Router();

crudRouter.post("/", isAuthenticate, crudController.createProduct);

crudRouter.get("/", isAuthenticate, crudController.readProduct);

crudRouter.put("/:id", isAuthenticate, crudController.updateProduct);

crudRouter.delete("/:id", isAuthenticate, crudController.deleteProduct);

export default crudRouter;