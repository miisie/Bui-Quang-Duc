import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;
  
    @Column()
    password: string;
  
    @Column()
    email: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;
}