import { model } from "mongoose";
import {TweetRepository, LikeRepository} from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        try {
            console.log(modelId, modelType, userId);
            if(modelType == 'Tweet'){
                var likeable = await this.tweetRepository.find(modelId, 'likes');
                // console.log(likeable);
            }
            else if(modelType == 'Comment'){
                // TODO
                // var likeable = await this.CommentRepository.get(modelId)
            }
            else{
                throw new Error('unknow model type');
            }
            const exists = await this.likeRepository.findByUserAndLikeable({
                user : userId,
                onModel : modelType,
                likeable : modelId
            });
            console.log('exisits:', exists);
            if(exists){
                likeable.likes.pull(exists.id);
                await likeable.save();
                await this.likeRepository.destroy(exists.id);
                var isAdded = false;
            }
            else{
                const newLike = await this.likeRepository.create({
                    user: userId,
                    onModel : modelType,
                    likeable: modelId
                });
                likeable.likes.push(newLike.id);
                await likeable.save();
                var isAdded = true;
            }
            return isAdded;
        } catch (error) {
            console.log('Like Service Error');
            throw error;
        }
    }
}

export default LikeService;