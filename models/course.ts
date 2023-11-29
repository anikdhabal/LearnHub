
import mongoose from "mongoose";

export const courseSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    author: String,
    duration: String,
    rating: Number,
    price: Number
});

const course = mongoose.models.course || mongoose.model("course", courseSchema);

export default course;
