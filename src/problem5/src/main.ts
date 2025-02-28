import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { TaskController } from "./controllers";
import { AppDataSource } from "./connectors/db-connector";

const app = express();
const port = process.env.PORT || 3000;

// controllers
const taskCtl = new TaskController();
const appCtl = new TaskController();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(appCtl.getPath(), appCtl.getRouter());
app.use(taskCtl.getPath(), taskCtl.getRouter());

AppDataSource.initialize().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
