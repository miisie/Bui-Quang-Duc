import { Router } from "express";
import { UserController } from "./controllers/users";

const userRouter = Router();
    
const userController = new UserController;
userRouter.get("/", (req, res)=>userController.getAllUsers(req, res));
userRouter.post("/", (req, res)=>userController.createUser(req, res));
userRouter.get("/:id", (req, res)=>userController.getUserById(req, res));
userRouter.delete("/:id", (req, res)=>userController.delUserById(req, res));
userRouter.put("/:id", (req, res)=>userController.updUserById(req, res));

export default userRouter;