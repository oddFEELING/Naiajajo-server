const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserAccount = require('../../models/user_models/UserModel');

const signup = async (req, res) => {
  data = req.body;
  data.password = await bcrypt.hash(data.password, 10);
  console.log(`Received --> ${JSON.stringify(data)}`);

  try {
    const newUser = await UserAccount.create({
      ...data,
    });

    const UserData = {
      id: newUser._id,
      firstname: newUser.firstname,
      email: newUser.email,
    };

    const token = jwt.sign({ ...UserData }, process.env.JWT_SECRET);

    // send token to user
    res.json({
      status: 'ok',
      message: 'User created',
      token: token,
    });
  } catch (err) {
    console.log(`Eror --> ${err}`);
    res.json({ status: 'failed', err: err });
  }
};

module.exports = signup;
