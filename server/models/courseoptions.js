import mongoose from 'mongoose';

const CourseoptionsSchema = new mongoose.Schema({
    name: String
    code: String
});

export default mongoose.model('Courseoptions', courseoptionsSchema);