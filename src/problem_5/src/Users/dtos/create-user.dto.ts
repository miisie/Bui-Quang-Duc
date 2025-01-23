import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @Matches(/^\+?[0-9]{7,11}$/, { message: 'phone must be a valid phone number' })
    phone: string;
}
