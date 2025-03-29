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
    // const tweet = await Tweet.create({
    //     content : 'Third tweet',
    //     userEmail:'22112@iiitu.ac.in'
        
    // });
    const repo = new TweetRepositoy();

    const tweet = await repo.getWithComments('67e7bbab6c27d83abae0770b');
    console.log(tweet);
});
