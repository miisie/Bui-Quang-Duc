import { Repository } from 'typeorm';
import { UserEntity } from '../entities/users';
import { injectable } from 'tsyringe';

@injectable()
export class UserRepository extends Repository<UserEntity> {

    async getUserById(id: string): Promise<UserEntity | null> {
        return await this.findOneBy({ id });
    }
    
}