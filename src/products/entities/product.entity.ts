import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text', {
    nullable: true,
  })
  description?: string;

  @Column('int', {
    default: 0,
  })
  price: number;

  @Column('int', {
    default: 0,
  })
  points: number;

  @Column('int', {
    default: 0,
  })
  stock_units: number;

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Relation<Cart[]>;
}
