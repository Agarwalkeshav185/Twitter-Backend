import { TweetRepository, HashTagRepository } from '../repository/index.js'; 

export default class TweetService {
    constructor() {
        this.tweetRepositoy = new TweetRepository();
        this.hashTagRepository = new HashTagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => {
                const newtag = tag.substring(1);
                return newtag.toLowerCase();
            });  // this regex extracts hashtags

            // Creating Tweets.
            const tweet = await this.tweetRepositoy.create(data);

            // Extracting Already Present Tweets.
            let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
            let titleofPresentTags = alreadyPresentTags.map(tag => {
                return tag.title;
            });

            // Filtering HashTags.
            let newTags = tags.filter(tag => !titleofPresentTags.includes(tag));
            newTags = newTags.map( tag => {
                return {title: tag, tweets : [tweet.id]}
            });

            // Creating new Hashtags.
            const response = await this.hashTagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach( (tag)=>{
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log('Tweet Service Error');
            throw error;
        }
    }
}

/*
    this is my #first #tweet. I am really #excited. 
*/ 