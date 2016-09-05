import React, { Component } from 'react';
import d3 from 'd3';

import Axis from './Axis';
import Bar from './Bar';

require('./style.less');

class BarChart extends Component {
  componentWillMount () {

  }

  render() {
    // Destructuring params passed from Physical Stats
    let { params, className, barChartData } = this.props;
    let { height, width, margins, barWidth, xDomain } = params;

    let xScale = d3.scale.ordinal()
                   .range([margins.left * 2, (width - margins.right)])
                   .domain(xDomain)
                   .rangeRoundPoints([margins.left, (width - 125)]);

    let yScale = d3.scale.linear()
                    .range([height - (margins.bottom * 2), margins.top])
                    .domain([0, d3.max(barChartData[0][className])]);

    let xTranslate = 'translate(' + (margins.left * 2) + ',' + (height - 2 * margins.bottom) + ')';

    let yTranslate = 'translate(' + (margins.left * 2) + ',' + 0 + ')';

    let translate = 'translate(0, 0)';

    return (
      <svg className='barChart' width={width} height={height}>
        <g transform={translate}>
          <Bar {...this.props} className='bar1' chart={className} i={0} params={params} />
          <Bar {...this.props} className='bar2' chart={className} i={1} params={params} />
          <Bar {...this.props} className='bar3' chart={className} i={2} params={params} />
          <Axis {...this.props} className='xAxis' d3scale={xScale} orient={'bottom'} translate={xTranslate} />
          <Axis {...this.props} className='yAxis' d3scale={yScale} orient={'left'} translate={yTranslate} />
        </g>
      </svg>
    );

  }
}

export default BarChart;
