const express = require('express');
const connect = require('./config/database');


const {PORT} = require('./config/serverConfig');

const Tweet = require('./models/tweet');

const app  = express();

app.listen(PORT, async ()=>{
    console.log(`Server started at port :- ${PORT}`);
    await connect();
    console.log('MongoDb Connected');
});
