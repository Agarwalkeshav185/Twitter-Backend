import LikeService from "../services/like-service.js";

const likeService = new LikeService();

const toggleLike = async (req, res) =>{
    try {
            const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
            return res.status(200).json({
                data : response,
                success: true,
                message : 'Successfully toggled the like',
                err : {}
            })
    } catch (error) {
        console.log("Like Controller Error");
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Unable to toggle the like',
            err: error
        })
    }
}
export {
    toggleLike,

}

