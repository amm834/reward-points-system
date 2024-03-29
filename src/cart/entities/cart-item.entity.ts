import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn()
  cart: Relation<Cart>;

  @ManyToOne(() => Product, (product) => product.cartItems)
  @JoinColumn()
  product: Relation<Product>;
}
