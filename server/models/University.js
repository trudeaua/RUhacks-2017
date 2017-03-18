import mongoose from 'mongoose';

const UniversitySchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('University', UniversitySchema);