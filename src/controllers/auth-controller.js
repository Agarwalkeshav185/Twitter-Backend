import UserService from '../services/user-service.js';

const userService = new UserService();

const signup = async (req, res) =>{
    try {
        const response = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        return res.status(201).json({
            data : response, 
            success : true,
            message : 'Successfully Created a new User',
            err : {}
        })        
    } catch (error) {
        console.log('User Signup Controller Error');
        return res.status(500).json({
            success: false,
            data: {},
            message : 'Unable to Create a new User',
            err : error
        })
    }
}

export {
    signup,
    
};