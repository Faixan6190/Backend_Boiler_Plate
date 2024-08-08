import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";

const routes = Router();

routes.get("/", getController);
routes.post("/", postController);
routes.delete("/:id", deleteController);

export default routes;
