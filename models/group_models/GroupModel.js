const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Group = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    alajo: {
      type: String,
      required: true,
    },

    deputy_alajo: {
      type: String,
    },

    member_count: {
      type: Number,
      required: true,
    },

    period: {
      type: Object,
      default: {
        start_date: Date,
        interval: Number,
        end_date: Date,
      },
    },

    pay: {
      type: Object,
      required: true,
      default: {
        interval_pay: Number,
        goal: Number,
      },
    },
  },
  { collection: 'groups' }
);

const GroupDetail = mongoose.model('groups', Group);

module.exports = GroupDetail;
