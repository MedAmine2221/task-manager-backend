import { Injectable } from '@nestjs/common';
import { AuthPayloadDTO } from '../dto/auth.dto';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ) {}

  async validateUser({ email, password }: AuthPayloadDTO) {
    const findUser = await this.userService.findUserByMail(email);
    
    if (!findUser) return null;

    if (password === findUser.password) {
      return findUser;
    }

    return null;
  }
}
