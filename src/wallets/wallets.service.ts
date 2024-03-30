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

  async transferPoints(from: User, to: User, points: number) {
    try {
      const fromWallet = await this.walletRepository.findOne({
        where: {
          userId: from.id,
        },
      });

      if (fromWallet.reward_points < points) {
        throw new BadRequestException('Insufficient points');
      }

      const toWallet = await this.walletRepository.findOne({
        where: {
          userId: to.id,
        },
      });

      fromWallet.reward_points -= points;
      toWallet.reward_points += points;

      await this.walletRepository.save([fromWallet, toWallet]);

      return {
        message: 'Transfer successful',
      };
    } catch (e) {
      throw new BadRequestException('Transfer failed');
    }
  }
}
