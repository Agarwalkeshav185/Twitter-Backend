import JWT from 'passport-jwt';
import User from '../models/user.js';
import { JWT_SECRET_KEY } from './serverConfig.js';

const JWTStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : JWT_SECRET_KEY
}

export const passportAuth = (passport) =>{
    try {
        passport.use(new JWTStrategy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user){
                done(null, false);
            }
            else{
                done(null, user);
            }
        }));
    } catch (error) {
        console.log('Jwt Middleware Error');
        throw error;
    }
}