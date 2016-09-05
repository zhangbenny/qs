// Create a mongoose schema/model with title, director, release date, total $ grossed
var mongoose = require('mongoose');

var YearSchema = new mongoose.Schema({
  year: Number,
  month: Array
});

module.exports = mongoose.model('year', YearSchema);
