import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from '@nestjs/common';

@Controller("users")
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}


@Post("login")
async login(@Body() loginData: { username: string; password: string }) {
  const user = await this.userService.validateUser(
    loginData.username,
    loginData.password
  );


  if (!user) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const payload = { username: user.username, sub: user.id };
  return {
    access_token: this.jwtService.sign(payload),
  };
}



  @UseGuards(AuthGuard("jwt"))
  @Post("protected")
  getProtected() {
    return { message: "This is a protected route" };
  }
}
