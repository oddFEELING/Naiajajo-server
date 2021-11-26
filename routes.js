const express = require('express');
const User = require('./controllers/user_controller/_switch.js');
const Ajo = require('./controllers/ajo_controller/_switch');

const router = express.Router();

//--------------------------------------->  User routes

router.post('/_api/user/signup', User.signup);
router.post('/_api/user/login', User.login);

//--------------------------------------->  Ajo routes
router.post('/_api/ajo/get_ajo', Ajo.create);

module.exports = router;
