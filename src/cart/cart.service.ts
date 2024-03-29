import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
  ) {}

  create(createCartDto: CreateCartDto, user: User) {
    // find existing cart
    const cart = this.cartRepository.findOne({ where: { user: user } });

    // if cart is not found, create a new one
    if (!cart) {
      const newCart = new Cart();
      newCart.user = user;
      return this.cartRepository.save(newCart);
    }

    return cart;
  }
}
