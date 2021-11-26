const mongoose = require('mongoose');

const create = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'This is used to create new Ajo' });
};

module.exports = create;
