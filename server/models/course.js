import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: String,
    code: String,
    time: String,
    location: String,
    length: String,
    faculty: String
});

export default mongoose.model('Course', CourseSchema);