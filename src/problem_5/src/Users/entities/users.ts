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
  
    @Column({ nullable: true })
    email: string;

    @Column({
        name: 'phone_number',
        nullable: true,
    })
    phoneNumber: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;
}