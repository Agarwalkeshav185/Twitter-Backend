

export default class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log('CRUD Repository Error');
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id, {new : true});
            if(!result){
                throw new Error('No data is present in the Database');
            }
            return result;
        } catch (error) {
            console.log('CRUD Repository Error');
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log('CRUD Repository Error');
            throw error;
        }
    }

    async getAll(){
        try {
            const result  = await this.model.find({});
            return result;
        } catch (error) {
            console.log('CRUD Repository Error');
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new : true});
            return result;
        } catch (error) {
            console.log('CRUD Repository Error');
            throw error;
        }
    }
}