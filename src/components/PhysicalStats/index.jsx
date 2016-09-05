import React, { Component } from 'react';
import d3 from 'd3';
import { map } from 'lodash';

import BarChart from '../BarChart';

class PhysicalStats extends Component {

  makeBarChart(chartName) {
    // Params to create the <barChart />
    let props = this.props;

    let params = {
          height: 400,
          width: 300,
          barWidth: 50,
          margins: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          },
          xDomain: ['Day 1', 'Day 2', 'Day 3']
        }

    return (
      <div>
        <h1 classname='barChartTitle'> {chartName} </h1>
        <BarChart className={chartName} {...props} params={params} />
      </div>
    )
  }

  render() {
    // if (this.currenData2.length < 1) {

    // }

    let barCharts = this.props.barChartData[0];

    return (
      <div className='barCharts'>
        <h1> Look at thems bars! </h1>
          {map(barCharts, (val, key) => ::this.makeBarChart(key))}
      </div>
    )
  }
}


export default PhysicalStats;


    // let { month, year } = this.props.areaChartData[0]

    // let monthTable = ['x', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // let monthName = monthTable[month];
    // // Note: turning year into a string will make the program crash

    // let requestMonth = this.props.dispatchFetchAreaChart;

    // let prevMonth = month - 1 > 0 ? month - 1 : 12,
    //     nextMonth = month + 1 < 13 ? month + 1 : 1

    // // Params to create the <Chart />
    // let params = {
    //       height: 400,
    //       width: 300,
    //       margins: {
    //         top: 20,
    //         right: 20,
    //         bottom: 20,
    //         left: 20
    //       },
    //       xDomain: ['A', 'B', 'C', 'D', 'E'],
    //       yDomain: [25, 210]
    //     }

    // return (
    //   <div>
    //     <div className="chartNav" width={params.width} height={200}>

    //       <div className="pull-left">
    //         <span className="glyphicon glyphicon-chevron-left" 
    //               aria-hidden="true"
    //               onClick={() => requestMonth(year, prevMonth)}
    //               >
    //         </span>
    //       </div>
    //       <div className="pull-right">
    //         <span className="glyphicon glyphicon-chevron-right" 
    //                 aria-hidden="true"
    //                 onClick={() => requestMonth(year, nextMonth)}
    //                 >
    //         </span>
    //       </div>
    //       <div className="chartTitle inline-block"> 
    //         <h2> {monthName} {year} </h2> 
    //         <h3> Area Chart </h3>
    //       </div>
    //     </div>
    //     <Chart {...this.props} params={params}/>
    //   </div>
    // );
