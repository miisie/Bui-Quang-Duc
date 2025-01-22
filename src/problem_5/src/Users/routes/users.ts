import { Request, Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/users";
import { asyncHandler } from "../../Commons/Helpers/ayncs-handler";

const userRouter = Router();

const userController = container.resolve(UserController);

userRouter.get("/:id", asyncHandler(userController.getUserById));

export default userRouter;