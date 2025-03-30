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

export {
    createTweet,

}