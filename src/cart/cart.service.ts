import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async addToCart(createCartDto: CreateCartDto, user: User) {
    const product = await this.productRepository.findOne({
      where: {
        id: createCartDto.productId,
      },
    });

    if (!product) {
      throw new UnprocessableEntityException('Product not found');
    }

    if (product.stock_units < createCartDto.quantity) {
      throw new UnprocessableEntityException('Product out of stock');
    }

    const isProductInCart = await this.cartRepository.findOne({
      where: {
        productId: createCartDto.productId,
        userId: user.id,
      },
    });

    if (isProductInCart) {
      isProductInCart.quantity =
        createCartDto.quantity ?? isProductInCart.quantity;
      await this.cartRepository.save(isProductInCart);
      return;
    }

    const cart = this.cartRepository.create({
      ...createCartDto,
      userId: user.id,
    });

    await this.cartRepository.save(cart);
  }

  getCart(user: User) {
    return this.cartRepository.find({
      where: {
        userId: user.id,
      },
      relations: ['product'],
    });
  }

  async removeProductFromCart(createCartDto: CreateCartDto, user: User) {
    const result = await this.cartRepository.delete({
      productId: createCartDto.productId,
      userId: user.id,
    });

    if (!result.affected) {
      throw new UnprocessableEntityException('Product not found in cart');
    }
  }

  async getCartTotalPoint(user: User) {
    const cartItems = await this.cartRepository.find({
      where: {
        userId: user.id,
      },
      relations: ['product'],
    });
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.points * cartItem.quantity;
    }, 0);
  }

  async removeAllProductFromCart(user: User) {
    await this.cartRepository.delete({
      userId: user.id,
    });
  }
}
