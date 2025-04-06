import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import {SALT} from '../config/serverConfig.js';

const userSchema = new mongoose.Schema({
    email : {
        type: String, 
        required :true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    name :{
        type: String, 
        required : true
    } 
}, {timestamps : true});

userSchema.pre('save', function(next){
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});
const User = mongoose.model('User', userSchema);

export default User;