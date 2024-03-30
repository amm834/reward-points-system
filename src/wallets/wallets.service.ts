import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  create(user: User) {
    return this.walletRepository.save({
      balance: 0,
      reward_points: 0,
      user,
    });
  }

  async redeemPoints(user: User, points: number) {
    const wallet = await this.walletRepository.findOne({
      where: {
        userId: user.id,
      },
    });

    if (wallet.reward_points < points) {
      throw new BadRequestException('Insufficient points');
    }

    wallet.reward_points -= points;

    return this.walletRepository.save(wallet);
  }
}
