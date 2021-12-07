const UserAccount = require('./../../models/user_models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const data = req.body;

  // try to get user
  try {
    const User = await UserAccount.findOne({ email: data.email }).lean();

    // check for password
    if (await bcrypt.compare(data.password, User.password)) {
      const userData = {
        id: User._id,
        firstname: User.firstname,
        email: User.email,
      };
      const token = jwt.sign({ ...userData }, process.env.JWT_SECRET);

      // send token to user
      res.json({
        status: 'ok',
        message: 'User credentials correct',
        token: token,
      });
    } else {
      res.json({ status: 'wrong password', message: 'password incorrect' });
    }
  } catch (err) {
    console.log(`Error--> ${err}`);
    res.json({ status: 'User Not found', message: err });
  }
};

module.exports = login;
