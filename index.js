import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@cluster0.uxxmpv3.mongodb.net/${ENV.DB_NAME}`);

mongoose.connection.on("connected", () => {
  console.log(chalk.white.bgGreen.bold("---- Connected to MongoDB ----"));
});

app.get("/", (req, res) => {
  console.log("request", req.body);
  res.send("Hello World");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


