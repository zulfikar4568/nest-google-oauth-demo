import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import { UserDetails } from './types/user.type';

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService) {}

  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.db.user.findUnique({
      where: {
        email: details.email,
      },
    });
    console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    const newUser = this.db.user.create({
      data: {
        email: details.email,
        fullName: details.fullName,
      },
    });
    return newUser;
  }

  async findUser(id: string) {
    const user = await this.db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
}
