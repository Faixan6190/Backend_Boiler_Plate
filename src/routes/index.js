import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import productRoutes from "../modules/product/routes.js";
import uploadRoutes from "../modules/upload/routes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/product", productRoutes);
routes.use("/upload", uploadRoutes);

export default routes;
