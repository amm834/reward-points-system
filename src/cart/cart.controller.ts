import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { User } from '../users/entities/user.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @UseGuards(AuthGuard)
  getCart(@Request() req) {
    const user = req.user as User;
    return this.cartService.getCart(user);
  }

  @Post()
  @UseGuards(AuthGuard)
  addProductToCart(@Body() createCartDto: CreateCartDto, @Request() req) {
    const user = req.user as User;
    return this.cartService.addToCart(createCartDto, user);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  @UseGuards(AuthGuard)
  removeProductFromCart(@Body() createCartDto: CreateCartDto, @Request() req) {
    const user = req.user as User;
    return this.cartService.removeProductFromCart(createCartDto, user);
  }
}
