import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from '../constants/providers.constant';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
