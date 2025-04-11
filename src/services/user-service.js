import { UserRepository } from "../repository/index.js";

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('Signup Service Error');
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.getBy({ email : email });
            return user;
        } catch (error) {
            console.log('login Service Error');
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.userRepository.getBy({email : data.email});
            if(!user){
                throw new Error('User not Found.');
            }
            if(! user.comparePassword(data.password)){
                throw new Error('Incorrect Password.');
            }

            const token = user.genJWT();
            return token;

        } catch (error) {
            console.log('login Service Error');
            throw error;
        }
    }
}

export default UserService;