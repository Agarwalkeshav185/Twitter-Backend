const Tweet = require('../models/tweet');

class TweetRepositoy {

    create = async (data) =>{
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    };

    get  = async(id) =>{
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    }

    getByEmail = async(userEmail) => {
        try {
            const tweet = await Tweet.findOne({
                userEmail : userEmail
            });
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    }

    getWithComments = async (tweetId) =>{
        try {
            const tweet = await Tweet.findById(tweetId).populate({path : 'comments'});
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }

    }
    update = async (tweetId, data) => {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new:true});
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    };

    destroy  =  async (id) =>{
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    };
}

module.exports = TweetRepositoy;