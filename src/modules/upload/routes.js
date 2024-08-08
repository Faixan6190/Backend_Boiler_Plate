import { Router } from "express";
import uploadController from "./controllers/upload.js";
import multer from "multer";

const routes = Router();

const upload = multer({ dest: "uploads/" });

routes.post("/", upload.single("file"), uploadController);

export default routes;
