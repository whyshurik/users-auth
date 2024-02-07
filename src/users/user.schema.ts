import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
interface UserAttr {
    username: string,
    password: string
}

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    async hashPassword() {
        try {
            const rounds = bcrypt.getRounds(this.password);
            if (rounds === 0) {
                this.password = await bcrypt.hash(this.password,10);
            }
        } catch (error){
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}
export const UserSchema = SchemaFactory.createForClass(User)