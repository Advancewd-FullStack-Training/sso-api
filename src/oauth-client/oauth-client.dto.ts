import { IsNotEmpty } from "class-validator";

export class CreateOauthClientDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  url: string;
}