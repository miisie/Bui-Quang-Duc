import { IsEmail, IsOptional, IsString, Matches } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @Matches(/^\+?[0-9]{7,15}$/, { message: 'phone must be a valid phone number' })
    phone: string;
}
