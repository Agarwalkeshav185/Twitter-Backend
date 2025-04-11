import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(10);
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export {
    PORT, 
    SALT,
    JWT_SECRET_KEY,
    
    
}