import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module';
import { productProviders } from './product.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...productProviders, ProductsService],
})
export class ProductsModule {}
