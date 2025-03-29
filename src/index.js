const express = require('express');
const connect = require('./config/database');

// const Tweet = require('./models/tweet');
const TweetRepositoy = require('./repository/tweet-repository');
const {PORT} = require('./config/serverConfig');
const Comment = require('./models/comment');


const app  = express();

app.listen(PORT, async ()=>{
    console.log(`Server started at port :- ${PORT}`);
    await connect();
    console.log('MongoDb Connected');
    const repo = new TweetRepositoy();
    const tweet = await repo.create({
            content : 'with Hooks',
            userEmail:'22112@iiitu.ac.in'   
    });
    // const tweet = await repo.getAll(0,1);
    console.log(tweet);
});
