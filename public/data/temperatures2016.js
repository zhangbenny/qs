var YearController = require('../controllers/yearController.js');

var temperatures2016 = {
   year: 2016,
   month: [
      'THIS IS INDEX 0',
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": 100
         },
         {
            "week": "B",
            "temp": 100
         },
         {
            "week": "C",
            "temp": 100
         },
         {
            "week": "D",
            "temp": 100
         },
         {
            "week": "E",
            "temp": 100
         }
      ],
      [
         {
           week: 'A',
           temp: 125
         }, 
         {
           week: 'B',
           temp: 120
         }, 
         {
           week: 'C',
           temp: 130
         }, 
         {
           week: 'D',
           temp: 150
         }, 
         {
           week: 'E',
           temp: 160
         }
     ],
      [
         {
            "week": "A",
            "temp": 200
         },
         {
            "week": "B",
            "temp": 200
         },
         {
            "week": "C",
            "temp": 200
         },
         {
            "week": "D",
            "temp": 200
         },
         {
            "week": "E",
            "temp": 200
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ],
      [
         {
            "week": "A",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "B",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "C",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "D",
            "temp": Math.random() * (220 - 80) + 80
         },
         {
            "week": "E",
            "temp": Math.random() * (220 - 80) + 80
         }
      ]
   ]
}

module.exports = (function () {
   YearController.addYear(temperatures2016, function (err, year) {
     if (err) {
       throw err;
     }
     console.log(year);
   })
})()
