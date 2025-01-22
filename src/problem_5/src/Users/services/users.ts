import { inject, injectable, container } from "tsyringe";
import { NotFoundException } from "../../Commons/Exceptions/errors";
import { UserRepository } from "../repositories/users";
import { SuccessReponse } from "../../Commons/Responses/success-response";

@injectable()
export class UserService {
    constructor(
        @inject(UserRepository) private userRepository: UserRepository
    ) {}

    async getUserById(id: string) {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        const data = {
            "username": user.username,
            "email": user.email,
            "phone": user.phoneNumber
        }
        return new SuccessReponse(data);
    }
}

container.resolve(UserService);