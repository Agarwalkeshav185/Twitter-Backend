import { CommmentRepository, TweetRepository} from "../repository/index.js";

class CommentService {
    constructor(){
        this.commentRepository = new CommmentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async createComment(modelId, modelType, userId, content) {
        try {
            if(modelType == 'Tweet'){
                var commentable = await this.tweetRepository.get(modelId);
            }
            else if(modelType == 'Comment'){
                var commentable = await this.commentRepository.get(modelId);
            }
            else{
                throw new Error('Unknown Model Type');
            }
            const comment = await this.commentRepository.create({
                content : content,
                onModel : modelType,
                userId : userId,
                commentable : modelId,
                comments : []
            });

            commentable.comments.push(comment);
            await commentable.save();
            return comment;
        } catch (error) {
            console.log('Comment Service Error');
            throw error;
        }
    }
};

export default CommentService;