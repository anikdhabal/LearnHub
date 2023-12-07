import mongoose from "mongoose";

export default async function Connection() {
    
    mongoose.connect(process.env.DATABASE_CONNECTION_URL);
}
