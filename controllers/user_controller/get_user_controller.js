constbcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  const data = req.body;

  // get token from body
  const token = data.token;

  const UserDetails = jwt.decode(token);

  console.log('JWT DECODE--> ', UserDetails);
  if (!UserDetails) {
    res.json({ ststua: 'ok', User: 'NoUser' });
  } else {
    res.json({ status: 'ok', User: UserDetails });
  }
};

module.exports = getUser;
