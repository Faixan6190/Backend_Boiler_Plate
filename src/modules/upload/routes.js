import { Router } from "express";
import uploadController from "./controllers/upload.js";
import multer from "multer";
import path from "path";

const __dirname = path.resolve();
const routes = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/modules/upload/files");
  },
  filename: function (req, file, cb) {
    const uniqueId = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueId}-${file.orginalname}`);
  },
});

const upload = multer({ storage: storage });

routes.post("/", upload.single("file"), uploadController);

export default routes;
