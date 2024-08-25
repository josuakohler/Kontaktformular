import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    validateUser(username: string, password: string): Promise<User | null>;
}
