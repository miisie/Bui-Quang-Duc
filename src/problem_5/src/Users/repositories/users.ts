import { Repository } from 'typeorm';
import { UserEntity } from '../entities/users';
import AppDataSource from '../../../ormconfig';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

export class UserRepository {
    private dataSource: Repository<UserEntity>;

    constructor() {
        this.dataSource = AppDataSource.getRepository(UserEntity);
    }
    
    async getAllUsers(page: number, limit: number) {
        const users = await this.dataSource.find({
            order: {
                username: 'ASC',
            }
        });

        const totalCount = users.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedUsers = users.slice(startIndex, endIndex);
        const pageCount = paginatedUsers.length;
        const data = paginatedUsers.map(({ createdAt, password, ...props }) => props);

        return {data, page: page, pageCount, totalCount};
    }

    async getUserById(id: string): Promise<UserEntity | null> {
        return await this.dataSource.findOneBy({ id });
    }

    async getUserByEmail(email: string): Promise<UserEntity | null> {
        return await this.dataSource.findOneBy({ email });
    }

    async createUser(data: CreateUserDto) {
        const newUser = this.dataSource.create(data);
        await this.dataSource.save(newUser);
        return true;
    }
    
    async delUserById(id: string) {
        await this.dataSource.delete(id);
        return true;
    }

    async updUserById(id: string, data: UpdateUserDto) {
        await this.dataSource.update(id, data);
        return true;
    }
}