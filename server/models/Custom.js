import mongoose from 'mongoose';

const CustomSchema = new mongoose.Schema({
    mornings: String,
    breaks: String,
    clump: String 
});

export default mongoose.model('Custom', CustomSchema);