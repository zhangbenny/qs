var YearController = require('../controllers/yearController.js');

var temperatures2015 = {
   year: 2015,
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
            "temp": 90
         },
         {
            "week": "B",
            "temp": 95
         },
         {
            "week": "C",
            "temp": 100
         },
         {
            "week": "D",
            "temp": 105
         },
         {
            "week": "E",
            "temp": 110
         }
      ],
      [
         {
           week: 'A',
           temp: 140
         }, 
         {
           week: 'B',
           temp: 130
         }, 
         {
           week: 'C',
           temp: 120
         }, 
         {
           week: 'D',
           temp: 100
         }, 
         {
           week: 'E',
           temp: 105
         }
      ],
      [
         {
            "week": "A",
            "temp": 190
         },
         {
            "week": "B",
            "temp": 195
         },
         {
            "week": "C",
            "temp": 200
         },
         {
            "week": "D",
            "temp": 205
         },
         {
            "week": "E",
            "temp": 210
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
   YearController.addYear(temperatures2015, function (err, year) {
     if (err) {
       throw err;
     }
     console.log(year);
   })
})()
