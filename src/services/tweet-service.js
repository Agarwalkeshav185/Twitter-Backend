import { TweetRepository, HashTagRepository } from '../repository/index'; 

export default class TweetService {
    constructor() {
        this.tweetRepositoy = new TweetRepository();
        this.hashTagRepository = new HashTagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags
            const tweet = await this.tweetRepositoy.create(data);
            let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
            let titleofPresentTags = alreadyPresentTags.map(tag => {
                return tag.title;
            });
            let newTags = tags.filter(tag => !titleofPresentTags.includes(tag));

            newTags = newTags.map( tag => {
                return {title: tag, tweets : [tweet.id]}
            });

            const response = await this.hashTagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach( (tag)=>{
                tag.tweets.push(tweet.id);
                tweet.hashtags.push(tag.id);
                tag.save();
            });
            response.map( (tag)=>{
               tweet.hashtags.push(tag.id); 
            });
            tweet.save();
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