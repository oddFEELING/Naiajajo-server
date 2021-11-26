const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//-->  set date format
function dateSetter() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
}

const User = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      unique: true,
    },

    reg_date: {
      type: Date,
      required: true,
      default: new Date(),
    },

    ajo: {
      type: Array,
      default: [],
    },

    rank: {
      type: Object,
      default: {
        rank_title: String,
        rank_number: Number,
      },
    },

    cards: {
      type: Array,
      default: [],
    },

    notifications: {
      type: Array,
      default: [],
    },
  },
  { collection: 'users' }
);

const UserAccount = mongoose.model('users', User);

module.exports = UserAccount;
