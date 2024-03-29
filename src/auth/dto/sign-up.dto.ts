import { IsEmail, IsString } from 'class-validator';
import { Match } from '../../decorators/match.decorator';

export class SignUpDto {
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
