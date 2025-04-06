import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

const createComment = async (req, res) =>{
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            data : response, 
            success : true, 
            message : 'Successfully Comment Created',
            err : {}
        });
    } catch (error) {
        console.log('Comment Controller Error');
        return res.status(500).json({
            data: {},
            success : false, 
            message : 'Something Went Wrong',
            err : error
        });
    }
}

export {
    createComment
}