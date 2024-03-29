import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Wallet } from '../../wallets/entities/wallet.entity';
import { Cart } from '../../cart/entities/cart.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  password: string;

  @Column('simple-array')
  roles: string[];

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallet: Relation<Wallet>;

  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Relation<Cart>;
}
