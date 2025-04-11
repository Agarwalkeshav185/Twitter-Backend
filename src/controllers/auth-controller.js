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
        });
    }
}

const login = async (req, res) =>{
    try {
        const response = await userService.signin({
            email : req.body.email,
            password : req.body.password
        });
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in.',
            data : response,
            err : {}
        });
    } catch (error) {
        console.log('User login Controller Error');
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            message : error.message,
        });
    }
}

export {
    signup,
    login
    
};