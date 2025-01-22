import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserService } from "../services/users";
import { StatusCodes } from 'http-status-codes';

@injectable()
export class UserController {
    constructor(
        @inject(UserService) private userService: UserService   
    ) {}

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const data = await this.userService.getUserById(userId);
        return res.status(StatusCodes.OK).json(data);
        // return res.status(StatusCodes.OK).json(userId);
    }
}
