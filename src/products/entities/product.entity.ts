import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  stock_units: number;
}
