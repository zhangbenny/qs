/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/

/*
  areaChartData
*/
import axios from 'axios';


function fetchAreaChartData(year) {
  return axios.get('api/' + year);
}

export function dispatchFetchAreaChart(year, month) {
  return (dispatch, getState) => {
    return  fetchAreaChartData(year)
              .then(function (thisYearResults) {
                fetchAreaChartData(year - 1)
                  .then(function (lastYearResults) {
                    console.log('did it get the prev info ', thisYearResults)
                    console.log('definitely got this ', lastYearResults)
                    dispatch(updateAreaChart(year, month, lastYearResults.data[0]['month'][month], thisYearResults.data[0]['month'][month]));
                  })
              });
      
  }
}

export function updateAreaChart(year, month, lastYear, thisYear) {
  return {
    type: 'UPDATE_AREA_CHART',
    year,
    month,
    lastYear,
    thisYear
  };
}


/*
  barChartData
*/
function fetchBarChartData(day) {
  return axios.get('api/day' + day);
}

// export function dispatchFetchBarChart(date) {
//   return (dispatch, getState) => {
//     return  fetchBarChartData(date)
//               .then(function (results) {
//                 dispatch(updateBarChart('SOMETHINGINEEDTODEFINE');
//               });
//               
      
//   }
// }

// export function updateAreaChart(day) {
//   return {
//     type: 'UPDATE_BAR_CHART',
//     day
//   };
// }

