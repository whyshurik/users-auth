import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as crypto from "crypto";
import {UserService} from "./users/users.service";
import {CreateUserDto} from "./users/dto/create-user.dto";
async function start(){
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule)

    await app.listen(PORT, () => console.log(`server started on ${PORT} port`))
}
start()