import express from 'express';
import {connect} from './config/database.js';

import  {PORT} from './config/serverConfig.js';

import Hashtag from './models/hashtags.js';
import service from './services/tweet-service.js';

const app  = express();

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
