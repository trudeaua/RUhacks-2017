import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
    Coursename: String
    time: String
    length: String
    location: String
    tableid: Number
    login: String
});

export default mongoose.model('Schedule', ScheduleSchema);