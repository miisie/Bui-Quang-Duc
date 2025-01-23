import { Request, Response } from "express";
import { UserService } from "../services/users";
import { plainToClass, plainToInstance } from "class-transformer";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";

export class UserController {
    private userService: UserService; 
    constructor() {
        this.userService = new UserService;
    }

    async getAllUsers(req: Request, res: Response) {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;
        const data = await this.userService.getAllUsers(page, limit);
        res.status(data.status).json(data);
    }

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const data = await this.userService.getUserById(userId);
        res.status(data.status).json(data);
    }

    async createUser(req: Request, res: Response) {
        const userData = plainToClass(CreateUserDto, req.body);
        const data = await this.userService.createUser(userData);
        res.status(data.status).json(data);
    }

    async delUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const data = await this.userService.delUserById(userId);
        res.status(data.status).json(data);
    }

    async updUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const updData = plainToClass(UpdateUserDto, req.body);
        const data = await this.userService.updUserById(userId, updData);
        res.status(data.status).json(data);
    }
    
}
