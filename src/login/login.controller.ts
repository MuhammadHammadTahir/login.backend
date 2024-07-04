import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginEntity } from './entities/login.entity';

@Controller('login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiCreatedResponse({ type: LoginEntity })
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  @ApiOkResponse({ type: LoginEntity, isArray: true })
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LoginEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: LoginEntity })
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: LoginEntity })
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
