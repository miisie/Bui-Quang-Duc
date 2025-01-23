import { Repository } from "typeorm";
import { UserEntity } from "../../src/Users/entities/users";
import AppDataSource from "../../ormconfig";
import { faker } from "@faker-js/faker";

function randomPhone(min: number = 7, max: number = 11): string {
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
  
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += Math.floor(Math.random() * 10);
    }
  
    return randomString;
}

const seedData = Array.from({ length: 17 }, () => (
    {
        username: faker.internet.username(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: randomPhone(),
    }
));

async function seedUsers(users: {}[]) {

    await AppDataSource.initialize();
    const dataSource = AppDataSource.getRepository(UserEntity);

    for (const user of users) {
        try {
            const seedUser = dataSource.create(user);
            await dataSource.save(seedUser);
            console.log(`User ${seedUser.username} added`);
        } catch (error) {
            console.error('Error inserting user:', error);
        }
    }
}

seedUsers(seedData);