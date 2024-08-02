import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  create(createLoginDto: CreateLoginDto) {
    return this.prisma.article.create({data: createLoginDto});
  }

  findAll() {
    return this.prisma.article.findMany({});
  }

  findOne(username: string, password: string) {
    if(this.prisma.article.findMany({where:{username, password}}))
    return this.prisma.article.findMany({where:{username, password}});
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return this.prisma.article.update({
      where:{id},
      data: updateLoginDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({where:{id}});
  }
}
