import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
export declare class UserController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(loginData: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getProtected(): {
        message: string;
    };
}
