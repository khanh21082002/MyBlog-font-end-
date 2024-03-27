import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import post from './routers/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://khanhnv:khanh21082002@cluster0.zfqr5yx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true , limit: '30mb'}));
app.use('/',cors());


app.use('/posts', post);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => {
    console.log("MongoDB Connected")
   app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
   })
}).catch((error) => {
    console.log(error.message)
})

