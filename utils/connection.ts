import mongoose from "mongoose";

export default async function Connection() {
    
    mongoose.connect("mongodb+srv://adhabal2002:3DRndpHWhUW0Xiai@cluster0.wupnjdm.mongodb.net/");
}