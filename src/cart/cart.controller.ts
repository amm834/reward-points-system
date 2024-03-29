import { Body, Controller, Post, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { User } from '../users/entities/user.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto, @Request() req) {
    const user = req.user as User;

    return this.cartService.create(createCartDto, user);
  }
}
