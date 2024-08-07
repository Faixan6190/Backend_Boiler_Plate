import { Router } from "express";
import get from "./controllers/get.js";
import post from "./controllers/post.js";

const routes = Router();

routes.get("/", get);
routes.post("/", post);

export default routes;
