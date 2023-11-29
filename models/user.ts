import mongoose from "mongoose";
import { courseSchema } from "./course";
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    cart: [courseSchema],
    courses: [courseSchema],
})
const user = mongoose.models.user || mongoose.model('user',userSchema);
export default user;