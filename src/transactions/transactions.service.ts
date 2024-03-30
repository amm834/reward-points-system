import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotifyTransactionFromMerchantDto } from './dto/notify-transaction-from-merchant.dto';
import { Wallet } from '../wallets/entities/wallet.entity';
import { User } from '../users/entities/user.entity';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    private readonly settingService: SettingsService,
  ) {}

  async notifyTransaction(
    notifyTransactionFromMerchantDto: NotifyTransactionFromMerchantDto,
    user: User,
  ) {
    const spentDollar = await this.settingService.getRewardPoint();

    const wallet = await this.walletRepository.findOne({
      where: {
        userId: user.id,
      },
    });
    const result = await this.walletRepository.update(
      {
        userId: user.id,
      },
      {
        balance: +wallet.balance + +notifyTransactionFromMerchantDto.amount,
        reward_points:
          notifyTransactionFromMerchantDto.amount >= +spentDollar
            ? +wallet.reward_points + 1
            : wallet.reward_points,
      },
    );
    if (result.affected) {
      return {
        message: 'Transaction has been notified successfully',
      };
    }
  }
}
