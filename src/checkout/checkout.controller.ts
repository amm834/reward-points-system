import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { User } from '../users/entities/user.entity';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  @UseGuards(AuthGuard)
  checkout(@Request() req) {
    const user = req.user as User;
    return this.checkoutService.checkout(user);
  }
}
