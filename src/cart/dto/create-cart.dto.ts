import { IsNumber, IsOptional } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;
}
