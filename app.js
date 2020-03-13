const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const users = require('./routes/users/users');

import { connectToMongo } from './lib/mongoConnect';
require('dotenv').config();

const app = express();

connectToMongo(`mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASS}@cluster0-t71ol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    process.env.DB_NAME,
    'Connection Succesful(MONGO)'
);

app.use(express.json());
app.use(cookieParser());

// I QUESTION THIS STRONGLY
app.use(cors({credentials: true}));

app.get('/', (req, res) => res.send('Welcome to the your API!'));
app.use('/users', users);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))