import {Injectable} from "@nestjs/common";
import {UserService} from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async signIn(username: string, pass: string): Promise<any> {
        //const user = await this.usersService.
    }
}


