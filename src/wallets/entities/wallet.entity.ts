import {
  Column,
  Entity,
  JoinColumn,
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

  @Column({ type: 'decimal', default: 0 })
  balance: number;

  @Column({ type: 'decimal', default: 0 })
  reward_points: number;

  @Column()
  userId: number;

  @OneToOne(() => User, (user) => user.wallet)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Relation<Wallet>;
}
