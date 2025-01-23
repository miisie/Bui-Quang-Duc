import { Router } from "express";
import userRouter from "./Users/routes";

const indexRoute = Router();

indexRoute.use("/user", userRouter);

export default indexRoute;