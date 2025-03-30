import Hashtag from '../models/hashtags.js';

export default class HashtagRepository {

    create = async (data) =>{
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    };

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data); 
            return tags;
        } catch (error) {
            console.log("Hashtag Repository Error");
            throw error;
        }
    }

    get  = async(id) =>{
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    }

    destroy  =  async (id) =>{
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            console.log('Repository Error');
            throw error;
        }
    };

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log('Hashtag Repository Error');
            throw error;
        }
    }
}
