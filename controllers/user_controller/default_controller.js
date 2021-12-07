const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const DefaultModel = require('../../models/DefaultModel');
const multer = require('multer');

// declare multer storage

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now());
  },
});

const Upload = multer({ storage: Storage });

// handle the post request
const handleDefault = (req, res) => {
  const obj = {
    name: req.body.name,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + '/uploads/' + req.file.filename)
      ),
    },
  };

  // create the object
  DefaultModel.updateOne({}, { $push: { profile_img: obj } }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/_api/post/default');
    }
  });
};
