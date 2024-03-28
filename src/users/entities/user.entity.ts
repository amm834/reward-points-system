import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Wallet } from '../../wallets/entities/wallet.entity';

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

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallet: Relation<Wallet>;

  @Column('simple-array')
  roles: string[];
}
