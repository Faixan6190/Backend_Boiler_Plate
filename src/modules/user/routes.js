import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";

const routes = Router();

routes.get("/", getController);
routes.post("/", postController);
routes.delete("/:id", deleteController);
routes.put("/:id", updateController);

export default routes;
