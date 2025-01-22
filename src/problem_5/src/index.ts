import express, { Express } from "express";
import dotenv from "dotenv";
import AppDataSource from "../ormconfig";
import indexRoute from "./routes";
import { loggerMiddleware } from "./Middlewares/logger";
import "reflect-metadata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

AppDataSource.initialize()
.then(() => {
  console.log('Connecting to database successfully!');
})
.catch((error) => {
  console.error('Error connecting to the database', error);
});

app.use(loggerMiddleware);

app.use("/", indexRoute);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});