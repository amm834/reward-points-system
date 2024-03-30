import { IsNotEmpty, IsNumber } from 'class-validator';

export class NotifyTransactionFromMerchantDto {
  @IsNotEmpty()
  merchantName: string;

  @IsNumber()
  amount: number;
}
