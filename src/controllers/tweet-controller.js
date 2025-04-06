import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

const createTweet = async (req, res)=>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message:'Successfully created a new tweet',
            err : {}
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