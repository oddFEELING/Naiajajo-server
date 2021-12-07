const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DefaultSchema = new Schema({
  profile_img: [
    {
      name: String,
      img: {
        data: Buffer,
        contentType: String,
      },
    },
  ],
});

const DefaultModel = mongoose.model('default', DefaultSchema);

module.exports = DefaultModel;
