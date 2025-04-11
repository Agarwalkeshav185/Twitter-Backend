import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import {SALT, JWT_SECRET_KEY} from '../config/serverConfig.js';
import jwt from 'jsonwebtoken';

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

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate(){
    return jwt.sign( { id : this.id, email : this.email}, JWT_SECRET_KEY, {
        expiresIn : '1h'
    }); 
}

userSchema.pre('save', function(next){
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});


const User = mongoose.model('User', userSchema);
export default User;