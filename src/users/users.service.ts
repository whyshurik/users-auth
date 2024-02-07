import {Injectable} from "@nestjs/common";
import {User} from "./user.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async create(createUserDto: CreateUserDto) : Promise<User>{
        const createdUser = new this.userModel(createUserDto);
        await createdUser.hashPassword();
        return createdUser.save();
    }
    async findAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }
}