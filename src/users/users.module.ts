import {Module} from "@nestjs/common";
import {UserService} from "src/users/users.service"
import {User, UserSchema} from "./user.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersController} from "./users.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}], )],
    providers: [UserService],
    controllers: [UsersController]
})
export class UsersModule {}