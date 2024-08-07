import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
// import productRoutes from "../modules/product/routes.js";

const routes = Router();

routes.use("/user", userRoutes);
// routes.use("/product", productRoutes);

export default routes;
