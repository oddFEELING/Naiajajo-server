const bcrypt = require('bcryptjs');
const UserAccount = require('../../models/user_models/UserModel');

const signup = async (req, res) => {
  data = req.body;
  data.password = await bcrypt.hash(data.password, 10);
  console.log(`Received --> ${JSON.stringify(data)}`);

  try {
    UserAccount.create({
      ...data,
    });
    res.json({ status: 'ok', message: 'user created' });
  } catch (err) {
    console.log(`Eror --> ${err}`);
    res.json({ status: 'failed', err: err });
  }
};

module.exports = signup;
