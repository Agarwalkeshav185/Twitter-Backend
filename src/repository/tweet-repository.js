import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

export default class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

    getWithComments = async (tweetId) =>{
        try {
            const tweet = await Tweet.findById(tweetId).populate({
                path : 'comments',
                populate :{
                    path : 'comments'
                }
            }).lean();
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }

    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().limit(limit).skip(offset);
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }  
    }
    
    find(id, modelType){
        try {
            const result = Tweet.findById(id).populate({path:`${modelType}`});;
            return result;
        } catch (error) {
            console.log('Tweet Repository Error');
            throw error;
        }
    }
}
