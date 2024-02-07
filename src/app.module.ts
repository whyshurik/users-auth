import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserService} from "./users/users.service";
import {UsersModule} from "./users/users.module";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://user:123@users-auth.psjjlax.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule]
})
export class AppModule{}