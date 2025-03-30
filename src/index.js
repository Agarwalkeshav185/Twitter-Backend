import express from 'express';
import BodyParser from 'body-parser';

import {connect} from './config/database.js';
import  {PORT} from './config/serverConfig.js';
import ApiRoutes from './Routes/index.js';

import Hashtag from './models/hashtags.js';
import service from './services/tweet-service.js';

const app  = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use('/api', ApiRoutes);
app.listen(PORT, async ()=>{
    console.log(`Server started at port :- ${PORT}`);
    await connect();
    console.log('MongoDb Connected');

    // const ser = new service();
    // const hashtag = await ser.create({
    //     content:'KESHAV is #Excited and #naughty and also a way behind than others, he has to do #HARDWORK.'
    // });
    // console.log(hashtag);

});
