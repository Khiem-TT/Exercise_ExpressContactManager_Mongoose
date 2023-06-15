import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {Database} from "./src/models/data-source";
import contactRouter from "./src/routers/contact.router";

const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

Database.connectDB()
    .then(() => console.log('DB connected!'))
    .catch(error => console.log('DB connection error!', error.message));

app.use(bodyParser.json());
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});