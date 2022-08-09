const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    officialSiteURL: {
      type: String,
    },
    instagramURL: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Brand', schema);
