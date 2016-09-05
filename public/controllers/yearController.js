// Create controller methods that can do each of the CRUD actions, including:
  // R/D all movies at once
  // C/R/U/D individual movies 
var Year = require('../models/Year.js');

module.exports = {
  
  getAllYears: function (cb) {
    Year.find({}, function (err, movies) {
      if (err) {
        return cb(err);
      }
      cb(null, movies);
    });
  },

  addYear: function (newDoc, cb) {
    Year.findOne({year: newDoc.year}, function (err, foundYear) {
      if (foundYear) {
        Year.findByIdAndUpdate(foundYear._id, newDoc, {new: true}, function (err, updatedYear) {
          if (err) {
            return cb(err);
          }
          cb(null, updatedYear);
        });
      } else {
        Year.create(newDoc, function (err, createdYear) {
          if (err) {
            return cb(err);
          }
          cb(null, createdYear);
        })
      }
    });
  },

  findYear: function(year, cb) {
    Year.find({year: year}, function(err, foundMatch) {
      if (err) {
        return cb(err);
      } else {
        cb(null, foundMatch);
      }
    });
  },

  deleteYear: function (year, cb) {
    Year.remove({year: year}, function(err, status) {
      if (err) {
        return cb(err);
      }
      cb(null, status);
    });
  },

}

