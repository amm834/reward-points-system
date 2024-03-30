import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isUserExist = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (isUserExist) {
      throw new BadRequestException('User with this email already exists');
    }
    return this.userRepository.save({ ...createUserDto, roles: ['user'] });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  findOne(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  remove(id: number) {
    if (!this.userRepository.findOneBy({ id })) {
      throw new NotFoundException('User not found');
    }
    return this.userRepository.delete(id);
  }
}
