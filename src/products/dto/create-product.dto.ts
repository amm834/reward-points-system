import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  points: number;

  @IsNumber()
  stock_units: number;
}
