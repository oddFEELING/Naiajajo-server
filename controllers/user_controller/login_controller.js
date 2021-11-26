const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
  res.send('This is the login route ');
};

module.exports = login;
