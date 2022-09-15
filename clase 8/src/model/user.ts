import { prop } from "@typegoose/typegoose";

class userClass{
   
    @prop()

    public name?: string;
    public username?: string;
    public password?: string;
}