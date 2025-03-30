const { TweetRepositoy } = require("../repository/index");

class TweetService {
    constructor() {
        this.tweetRepositoy = new TweetRepositoy();
    }

    async create(data){
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
            tags.map((tag) => tag.substring(1));
            console.log(tags);

            const tweet = await this.tweetRepositoy.create(data);

            // todo create hashtags and add here
            /**
             * 1. bulkCreate in mongoose
             * 2. filter title of hashtag based on multiple tags
             * 3. how to add tweet id inside all the hashtags
             */
            return tweet;
        } catch (error) {
            
        }
    }
}

module.exports = TweetService;

/*
    this is my #first #tweet. I am really #excited. 
*/ 