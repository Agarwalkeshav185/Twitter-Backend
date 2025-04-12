import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(10);
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const AWS_REGION = process.env.AWS_REGION
const AWS_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const AWS_ACCESS_SECRET_KEY = process.env.S3_ACCESS_SECRET_KEY;
const BUCKET_NAME = process.env.BUCKET_NAME
export {
    PORT, 
    SALT,
    JWT_SECRET_KEY,
    AWS_REGION,
    AWS_ACCESS_KEY,
    AWS_ACCESS_SECRET_KEY,
    BUCKET_NAME

    
    
}