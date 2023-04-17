import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
// import { User } from '@prisma/client'
// const prisma = new PrismaClient()

@Injectable()
export class AuthService {
  constructor(private prisma : PrismaService) {}

  async signup(dto : AuthDto) {
    const hash = await argon.hash(dto.password)

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash
        },
        // select: {
        //   id: true,
        //   email :true,
        //   createdAt :true,
        // }
      })

      delete user.password;

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
      throw error;
    }
  }

  signin(dto : AuthDto) {
    return 'I Am Signin';
  }
}
