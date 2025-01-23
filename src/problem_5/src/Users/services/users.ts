import { UserRepository } from "../repositories/users";
import { DataReponse } from "../../Commons/Responses/response";
import { CreateUserDto } from "../dtos/create-user.dto";
import { isUUID, validate } from 'class-validator';
import { StatusCodes } from "http-status-codes";
import { UpdateUserDto } from "../dtos/update-user.dto";

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository;
    }

    async getAllUsers(page: number, limit: number) {

        const pagingUsers = await this.userRepository.getAllUsers(page, limit);
        return new DataReponse({
            "Users:": pagingUsers
        }, "", StatusCodes.OK);
    }

    async getUserById(id: string) {

        if (!isUUID(id)) {
            return new DataReponse({}, 'Invalid ID', StatusCodes.BAD_REQUEST);
        }

        const user = await this.userRepository.getUserById(id);
        if (!user) {
            return new DataReponse({}, `User with ID ${id} not found`, StatusCodes.NOT_FOUND);
        }

        const data = {
            "username": user.username,
            "email": user.email,
            "phone": user.phone
        }
        return new DataReponse(data, "", StatusCodes.OK);
    }

    async createUser(data: CreateUserDto) {

        const errors = await validate(data);
        if (errors.length > 0) {
            console.log(errors);
            return new DataReponse({}, 'Invalid inputs', StatusCodes.BAD_REQUEST);
        }

        const user = await this.userRepository.getUserByEmail(data.email);
        if (user) {
            return new DataReponse({}, `Email ${data.email} is already exist`, StatusCodes.BAD_REQUEST);
        }

        await this.userRepository.createUser(data);
        return new DataReponse({}, 'Create user successfully', StatusCodes.OK);
    }

    async delUserById(id: string) {

        if (!isUUID(id)) {
            return new DataReponse({}, 'Invalid ID', StatusCodes.BAD_REQUEST);
        }

        await this.userRepository.delUserById(id);
        return new DataReponse({}, 'Delete user successfully', StatusCodes.OK);
    }

    async updUserById(id: string, data: UpdateUserDto) {

        const errors = await validate(data);
        if (errors.length > 0) {
            console.log(errors);
            return new DataReponse({}, 'Invalid inputs', StatusCodes.BAD_REQUEST);
        }

        const user = await this.userRepository.getUserById(id);
        if (!user) {
            return new DataReponse({}, `User with ID ${id} not found`, StatusCodes.NOT_FOUND);
        }
        
        const userByEmail = await this.userRepository.getUserByEmail(data.email);
        if(user.email != data.email && userByEmail) {
            return new DataReponse({}, `Email ${data.email} is already exist`, StatusCodes.BAD_REQUEST);
        }

        await this.userRepository.updUserById(id, data);
        return new DataReponse({}, 'Update user successfully', StatusCodes.OK);
    }
}