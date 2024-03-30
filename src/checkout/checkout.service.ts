import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { CartService } from '../cart/cart.service';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class CheckoutService {
  constructor(
    private readonly cartService: CartService,
    private readonly walletService: WalletsService,
  ) {}

  async checkout(user: User) {
    try {
      const totalPoint = await this.cartService.getCartTotalPoint(user);
      await this.walletService.redeemPoints(user, totalPoint);
      return {
        message: 'You purchased successful',
      };
    } catch (error) {
      throw new error();
    }
  }
}
