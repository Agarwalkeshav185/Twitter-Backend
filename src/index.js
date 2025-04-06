import express from 'express';
import BodyParser from 'body-parser';

import {connect} from './config/database.js';
import  {PORT} from './config/serverConfig.js';
import ApiRoutes from './Routes/index.js';

// import Hashtag from './models/hashtags.js';
// import service from './services/tweet-service.js';
// import {UserRepository} from './repository/index.js';
// import LikeService from './services/like-service.js';


const app  = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

app.use('/api', ApiRoutes);
app.listen(PORT, async ()=>{
    console.log(`Server started at port :- ${PORT}`);
    await connect();
    console.log('MongoDb Connected');
    // const repo = new UserRepository();
    // const user = await repo.create({
    //     email:'22136@iiitu.ac.in',
    //     password:'123456',
    //     name: 'Keshav'
    // });

    // const ser = new LikeService();


    // ser.toggleLike( '67f017b8198450640c96a91d' , 'Tweet' , '67e9ac220fa11a1d2a64c89a' );
    // console.log(ser);

});
