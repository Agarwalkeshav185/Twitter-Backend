import express from 'express';
import {connect} from './config/database.js';

import  {PORT} from './config/serverConfig.js';

const app  = express();

app.listen(PORT, async ()=>{
    console.log(`Server started at port :- ${PORT}`);
    await connect();
    console.log('MongoDb Connected');


});
