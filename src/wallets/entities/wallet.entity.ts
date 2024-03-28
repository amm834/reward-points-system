import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({
  name: 'wallets',
})
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  point_balance: number;

  @OneToOne(() => User, (user) => user.wallet)
  user: Relation<Wallet>;
}
