import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
    name: String
    password: String
});

export default mongoose.model('Login', LoginSchema);