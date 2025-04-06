import Comment from '../models/comment.js';
import CrudRepository from './crud-repository.js';

class CommmentRepository extends CrudRepository {
    constructor(){
        super(Comment);
    }
    
}

export default CommmentRepository;