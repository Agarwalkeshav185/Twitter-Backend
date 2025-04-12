import TweetService from "../services/tweet-service.js";
import upload from '../config/fileUploadS3Config.js';

const singleUploader = upload.array('images',10);
const tweetService = new TweetService();

const createTweet = async (req, res)=>{
    try {
        singleUploader(req, res, async function(err, data){
            if(err){
                return res.status(500).json({ err : err });
            }
            console.log('Image url is :-', req.files);
            const reqData = { ...req.body };
            reqData.images = req.files.map((element)=>{
                return element.location;
            });
            const response = await tweetService.create(reqData);
            return res.status(201).json({
                data: response,
                success: true,
                message:'Successfully created a new tweet',
                err : {}
            });
        });
        
    } catch (error) {
        console.log('Create Controller Error');
        return res.status(500).json({
            message : 'Unable to Make A Tweet',
            err : error,
            success: false,
            data: {}
        });
    }
}

const getTweet = async (req, res)=>{
    try {
        const response = await tweetService.getTweet(req.params.id);
        return res.status(200).json({
            data: response,
            success : true, 
            err : {},
            message : 'Successfully able to get the details of a tweet'
        });
    } catch (error) {
        console.log(error);
        console.log('Get Tweet Controller Error');
        return res.status(500).json({
            message : 'Unable to fetch the Tweet',
            err : error,
            success: false,
            data: {}
        });
    }
}

export {
    createTweet,
    getTweet,
}