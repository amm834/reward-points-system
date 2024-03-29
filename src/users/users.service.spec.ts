import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let usersService: UsersService;

  const mockUser = {
    id: 1,
    name: 'Mock User',
    email: 'mock@email.com',
    password: 'password',
  };

  const MockRepository = jest.fn().mockImplementation(() => {
    return {
      create: jest.fn((dto: any) => dto),
      findOne: jest.fn((dto: any) => dto),
      findByEmail: jest.fn((dto: any) => {
        return dto.email === mockUser.email ? mockUser : null;
      }),
      remove: jest.fn((dto: any) => {
        return dto.id === mockUser.id ? mockUser : null;
      }),
    };
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockRepository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('create', () => {
    it('should create and return user', () => {
      const user = {
        name: 'New User',
        email: 'newuser@gmail.com',
        password: 'password',
      };

      jest.spyOn(usersService, 'create').mockImplementation(() => user as any);

      expect(usersService.create(user as any)).toEqual(user);
    });
  });

  describe('findByEmail', () => {
    it('should find and return user by email', async () => {
      jest
        .spyOn(usersService, 'findByEmail')
        .mockImplementation(() => mockUser as any);

      expect(await usersService.findByEmail(mockUser.email)).toBe(mockUser);
    });

    it('should throw NotFoundException if user not found', async () => {
      jest.spyOn(usersService, 'remove').mockImplementation(() => {
        throw new NotFoundException();
      });

      try {
        await usersService.remove(2);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('findOne', () => {
    it('should find and return user by id', async () => {
      jest
        .spyOn(usersService, 'findOne')
        .mockImplementation(() => mockUser as any);

      expect(await usersService.findOne(mockUser.id)).toEqual(mockUser);
    });
  });

  describe('remove', () => {
    it('should remove user', async () => {
      jest.spyOn(usersService, 'remove').mockImplementation(() => {
        return mockUser as any;
      });

      expect(await usersService.remove(mockUser.id)).toEqual(mockUser);
    });

    it('should throw NotFoundException if user not found to delete', async () => {
      jest.spyOn(usersService, 'remove').mockImplementation(() => {
        throw new NotFoundException();
      });

      try {
        await usersService.remove(2);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
