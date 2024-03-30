import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { NotifyTransactionFromMerchantDto } from './dto/notify-transaction-from-merchant.dto';
import { User } from '../users/entities/user.entity';
import { AuthGuard } from '../auth/gurads/auth.guard';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/notify')
  @UseGuards(AuthGuard)
  async notifyTransaction(
    @Body() notifyTransactionFromMerchantDto: NotifyTransactionFromMerchantDto,
    @Request() req,
  ) {
    const user = req.user as User;
    return this.transactionsService.notifyTransaction(
      notifyTransactionFromMerchantDto,
      user,
    );
  }
}
