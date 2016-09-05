import React, { Component } from 'react';
import d3 from 'd3';

import Chart from '../Chart';

class MonthlyTemperatures extends Component {

  componentWillMount() {
    this.props.dispatchFetchAreaChart(2016, 3);
  }

  render() {
    if (this.props.areaChartData.length < 1) {
      return (
        <h1> Loading Data </h1>
      )
    }

    let { month, year } = this.props.areaChartData[0]

    let monthTable = ['x', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthName = monthTable[month];
    // Note: turning year into a string will make the program crash

    let requestMonth = this.props.dispatchFetchAreaChart
;

    let prevMonth = month - 1 > 0 ? month - 1 : 12,
        nextMonth = month + 1 < 13 ? month + 1 : 1

    // Params to create the <Chart />
    let params = {
          height: 400,
          width: 300,
          margins: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          xDomain: ['A', 'B', 'C', 'D', 'E'],
          yDomain: [25, 210]
        }

    return (
      <div>
        <div className="chartNav" width={params.width} height={200}>

          <div className="pull-left">
            <span className="glyphicon glyphicon-chevron-left" 
                  aria-hidden="true"
                  onClick={() => requestMonth(year, prevMonth)}
                  >
            </span>
          </div>
          <div className="pull-right">
            <span className="glyphicon glyphicon-chevron-right" 
                    aria-hidden="true"
                    onClick={() => requestMonth(year, nextMonth)}
                    >
            </span>
          </div>
          <div className="chartTitle inline-block"> 
            <h2> {monthName} {year} </h2> 
            <h3> Area Chart </h3>
          </div>
        </div>
        <Chart {...this.props} params={params}/>
      </div>
    );
  }
}


export default MonthlyTemperatures;
