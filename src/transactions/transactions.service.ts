import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotifyTransactionFromMerchantDto } from './dto/notify-transaction-from-merchant.dto';
import { Wallet } from '../wallets/entities/wallet.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  async notifyTransaction(
    notifyTransactionFromMerchantDto: NotifyTransactionFromMerchantDto,
    user: User,
  ) {
    const wallet = await this.walletRepository.findOne({
      where: {
        userId: user.id,
      },
    });
    return await this.walletRepository.update(
      {
        userId: user.id,
      },
      {
        balance: +wallet.balance + +notifyTransactionFromMerchantDto.amount,
      },
    );
  }
}
