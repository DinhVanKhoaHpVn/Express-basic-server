import e from 'express';
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';

require('dotenv').config();

const app = express();

// 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

// Setup view engine
configViewEngine(app);

// Init web route
initWebRouter(app);


app.listen(port);
console.log(`Server started at http://localhost:${port}`);