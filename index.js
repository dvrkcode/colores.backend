import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import router from './src/routes/index.js';

dotenv.config()
const app = express();

// middleware
app.use(express.json())
app.use(morgan("dev"));


// authentication
// -- comming soon --


// routes
app.use(router)


const PORT = 5050;

app.listen(PORT,() => {
  console.log(`Running on PORT ${PORT}`);
})