import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;

  imageUrl: string;

  bio: string;
}