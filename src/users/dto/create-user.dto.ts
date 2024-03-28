import { IsEmail, IsString } from 'class-validator';
import { Match } from '../../match/match.decorator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @Match('password')
  password_confirmation: string;
}
