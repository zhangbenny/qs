// Create router with endpoints for:
// /api/years
  // create a year on post
  // retrieve all years on get
  // delete all year on delete

// /api/years/:id
  // retrieves the year on get
  // deletes the year on delete
  // updates the year on put

var YearController = require('../controllers/yearController.js');

module.exports = function (app, express) {
  var yearRouter = express.Router();

  app.use('/api', yearRouter);

  yearRouter.route('/')
    .get(function (req, res) {
      YearController.getAllYears(function (err, years) {
        if (err) {
          return res.json(err);
        }
        res.json(years);
      })
    })
    .post(function (req, res) {
      YearController.addYear(req.body, function (err, year) {
        if (err) {
          return res.json(err);
        }
        res.json(year);
      })
    })
    .delete(function (req, res) {
      YearController.deleteAllYears(function (err, removed) {
        if (err) {
          return res.json(err);
        }
        res.json('A total of ' + removed +' years have been removed');
      });
    });

  yearRouter.route('/:year')
    .get(function(req, res) {
      YearController.findYear(req.params.year, function (err, result) {
        if (err) {
          res.json(err);
        }
        res.json(result);
      });
    })
    // .delete(function(req, res) {
    //   YearController.deleteYear(req.params.year, req.params.month, function (err, status) {
    //     if (err) {
    //       return res.json(err);
    //     }
    //     res.json(status);
    //   });
    // })
  
};
