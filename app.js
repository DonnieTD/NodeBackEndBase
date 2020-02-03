const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const users = require('./routes/users/users');
import {connectToMongo} from './lib/mongoConnect';
require('dotenv').config();

const app = express();
<<<<<<< HEAD
  console.log(process.env)
connectToMongo(`mongodb+srv://${process.env.DB_UNAME}${process.env.DB_PASS}@cluster0-t71ol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
=======

connectToMongo(`mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASS}@cluster0-t71ol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
>>>>>>> fef9de29d4776fca8b3ca72370fc17f766f5758d
                process.env.DB_NAME,
               'Connection Succesful(MONGO)'
);

app.use(express.json());
app.use(cookieParser());
// I QUESTION THIS STRONGLY
app.use(cors({origin: [process.env.API_DOMAIN,process.env.CLIENT_DOMAIN],credentials: true}));

app.get('/', (req, res) => res.send('Welcome to the your API!'));
app.use('/users', users);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))