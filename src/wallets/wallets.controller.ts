import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { User } from '../users/entities/user.entity';
import { CreateTranferDto } from './dto/create-tranfer.dto';
import { UsersService } from '../users/users.service';

@Controller('wallets')
export class WalletsController {
  constructor(
    private readonly walletsService: WalletsService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/transfer')
  @UseGuards(AuthGuard)
  async transferPoint(
    @Request() req,
    @Body() createTranferDto: CreateTranferDto,
  ) {
    const fromUser = req.user as User;
    const toUser = await this.usersService.findOne(createTranferDto.toUserId);

    return this.walletsService.transferPoints(
      fromUser,
      toUser,
      createTranferDto.point,
    );
  }
}
