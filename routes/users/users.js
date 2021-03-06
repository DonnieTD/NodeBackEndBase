var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

import { CheckIfUserExists, CheckPassword, MakeJWT } from './HelperFunctions/loginHelperFunctions';
import { Register } from './HelperFunctions/registerHelperFunctions'
import { errorHandler } from '../../lib/errorHelperFunctions';

router.post('/register', async function (req, res) {
  try {
     res.send(await Register('Users', req.body.UserName, req.body.Password));
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
})

router.post('/login', async function (req, res) {
  try {
    let UserObj = await CheckIfUserExists("Users", req.body.UserName);
    let JWT;

    await CheckPassword(req.body.Password, UserObj[0].Password, UserObj[0]);

    JWT = await MakeJWT(JWTPayload, process.env.SECRET_KEY, { algorithm: 'HS256' });

    res.cookie('token', JWT, {
      expires: new Date(Date.now() + "30m"),
      secure: false, // set to true on production // then make it a boolean that does so lol....
      httpOnly: true,
    }).send(UserObj)

  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
})

// WILL HAVE TO BECOME MIDDLEWARE ( apparently not really )
router.post('/verify', async function (req, res) {
  if (!req.cookies.token) res.send(false);

  try {
    const decrypt = await jwt.verify(req.cookies.token, process.env.SECRET_KEY);

    // CHECK THIS OUT DUNNUHH WHUT IM DOING HERE??
    delete decrypt["iat"];

    res.send(decrypt);
  } catch (e) {
    res.send(false)
  }
})

router.post('/logout', async function (req, res) {
  const token = req.cookies.token;

  if (token) {
    res.clearCookie('token');
  }
  res.send(true);
});

module.exports = router