const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()

// Init DB
import {connectToMongo} from './lib/mongoConnect';

connectToMongo('mongodb+srv://'+
                process.env.DB_UNAME+':'+
                process.env.DB_PASS+
                '@cluster0-t71ol.mongodb.net/test?retryWrites=true&w=majority',
                process.env.DB_NAME,
               'Connection Succesful(MONGO)'
);

         
connectToMongo(`mongodb+srv://${process.env.DB_UNAME}${process.env.DB_PASS}@cluster0-t71ol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
                process.env.DB_NAME,
                'Connection Succesful(MONGO)'
);
               

app.use(express.json());

app.use(cors({
    origin: [
       process.env.API_DOMAIN,
       process.env.CLIENT_DOMAIN,
    ],
    credentials: true
  }));
app.use(cookieParser());



// Import Routes
app.get('/', (req, res) => res.send('Welcome to the your API!'));

const users = require('./routes/users/users');

app.use('/users', users);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))