import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  async create(createSettingDto: CreateSettingDto) {
    const isExist = await this.settingRepository.findOne({
      where: {
        name: createSettingDto.name,
      },
    });

    if (isExist) {
      throw new UnprocessableEntityException('Setting already exists');
    }
    return await this.settingRepository.save(createSettingDto);
  }

  findAll() {
    return this.settingRepository.find();
  }

  async update(updateSettingDto: UpdateSettingDto) {
    try {
      const setting = await this.settingRepository.findOne({
        where: {
          name: updateSettingDto.name,
        },
      });
      if (!setting) {
        throw new UnprocessableEntityException('Setting not found');
      }
      await this.settingRepository.update(setting.id, updateSettingDto);
      return {
        message: 'Setting updated successfully',
      };
    } catch (error) {
      throw new UnprocessableEntityException('Setting not found');
    }
  }

  async findOne(name: string) {
    return await this.settingRepository.findOne({
      where: {
        name,
      },
    });
  }

  async getRewardPoint() {
    const result = await this.settingRepository.findOne({
      where: {
        name: 'dollar_per_reward_point',
      },
    });
    return +result.value;
  }
}
