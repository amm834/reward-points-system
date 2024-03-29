import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const isUserExist = this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (isUserExist) {
      throw new HttpException('User with this email already exists', 400);
    }
    return this.userRepository.save({ ...createUserDto, roles: ['user'] });
  }

  async findByEmail(email: string): Promise<User> {
    const customer = await this.userRepository.findOneBy({ email });

    if (!customer) {
      throw new NotFoundException('Customer with this email does not exist');
    }

    return customer;
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
