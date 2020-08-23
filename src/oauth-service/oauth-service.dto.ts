import { IsNotEmpty } from "class-validator";

export class CreateOauthServiceDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  url: string;

  description: string;
}