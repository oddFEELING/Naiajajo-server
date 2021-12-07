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

    ajo: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ajos',
      },
    ],

    rank: {
      type: Schema.Types.ObjectId,
      ref: 'ranks',
    },

    payment: {
      active: {
        type: String,
        default: 'None',
      },
      cards: [
        {
          card_number: Number,
          holder: String,
          exp_date: Date,
          card_type: String,
        },
      ],
    },

    account: {
      balance: {
        type: Number,
        default: 45000,
      },
    },

    report: {
      sent: {
        type: Number,
        default: 10000,
      },
      received: {
        type: Number,
        default: 25000,
      },
    },

    notifications: [
      {
        time: Date,
        message: String,
        msg_type: String,
      },
    ],
  },

  { collection: 'users' }
);

const UserAccount = mongoose.model('users', User);

module.exports = UserAccount;
