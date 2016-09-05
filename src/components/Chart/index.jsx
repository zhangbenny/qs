import React, { Component } from 'react';
import d3 from 'd3';

import Line from './Line';
import Area from './Area';
import Axis from './Axis';

require('./style.less');

class Chart extends Component {
  componentWillMount () {

  }


  render() {
    // Destructuring params passed from Monthly Temperatures
    let { height, width, margins, xDomain, yDomain } = this.props.params;

    let xScale = d3.scale.ordinal()
                    .range([10, 300])
                    .domain(xDomain)
                    .rangeRoundPoints([margins.left, width - margins.right]);

    let yScale = d3.scale.linear()
                    .range([height - margins.top, margins.bottom])
                    .domain(yDomain);

    let xAxis = d3.svg.axis()
                   .scale(xScale)
                   .orient('bottom')
                   .innerTickSize([(-height + margins.top + margins.bottom)])
                   .outerTickSize(0);

    let yAxis = d3.svg.axis()
                   .scale(yScale)
                   .orient('left')
                   .tickValues([50, 75, 100, 125, 150, 175, 200])
                   .tickSize([0, 0]);

    let lineFunc = d3.svg.line()
                     .interpolate("cardinal") 
                     .x(function(d) {return xScale(d.week);})
                     .y(function(d) {return yScale(d.temp);})

    var areaFunc = d3.svg.area()
                     .interpolate("cardinal") 
                     .x(function (d) {return xScale(d.week);})
                     .y0(function (d) {return height - 2 * margins.bottom;})
                     .y1(function (d) {return yScale(d.temp);})

    let xTranslate = 'translate(0,' + (height - 2 * margins.bottom) + ')';

    let yTranslate = 'translate(' + margins.left * 2 + ',0)';
    
    let translate = `translate(0, 20)`;


    return (
      <svg className='lineChart img-responsive' width={width} height={height}>
        <g className="chart" transform={translate}>
          <Line {...this.props} className='line1' d={lineFunc(this.props.areaChartData[0].lastYear)} stroke='rgb(143, 163, 216)'/>
          <Line {...this.props} className='line2' d={lineFunc(this.props.areaChartData[0].thisYear)} stroke='rgb(200, 126, 185)'/>
          <Area {...this.props} className='area1' d={areaFunc(this.props.areaChartData[0].lastYear)} fill='rgb(143, 163, 216)'/>
          <Area {...this.props} className='area2' d={areaFunc(this.props.areaChartData[0].thisYear)} fill='rgb(200, 126, 185)'/>
          <Axis {...this.props} className='xAxis' axis={xAxis} translate={xTranslate}/>
          <Axis {...this.props} className='yAxis' axis={yAxis} translate={yTranslate}/>
        </g>
      </svg>
    );
  }
}

export default Chart;
