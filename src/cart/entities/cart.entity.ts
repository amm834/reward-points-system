import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @ManyToOne(() => User, (user: User) => user.carts)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Relation<User>;

  @ManyToOne(() => Product, (product: Product) => product.carts)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Relation<Product>;
}
