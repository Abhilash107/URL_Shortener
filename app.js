import express from 'express';
import router from './routes/url.route.js';


const app = express();


app.use('/url', router);

export {app}



