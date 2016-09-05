import React, { Component } from 'react';
import d3 from 'd3';

class Bar extends Component {

  render() {
    let { params, chart, className, barChartData, i } = this.props;
    let { barWidth, height, width, margins } = params;
    let dataValue = barChartData[0][chart][i];
    const maxDataValue = d3.max(barChartData[0][chart]);

    let d3scale = d3.scale.linear()
                    .range([height - (margins.bottom * 2), margins.top])
                    .domain([0, maxDataValue]);

    let barHeight = d3scale(maxDataValue - dataValue) - margins.top;

    let translate = "translate(" + (i * (barWidth * 1.5) + (margins.left * 2)) + "," + (height - margins.top - margins.bottom - barHeight) + ")"

    return (
      <g className={className}
         transform={translate}
         >
        <rect width={barWidth}
              height={barHeight}
              >
        </rect>
        <text x={barWidth / 4}
              y={12}
              dx={'.35em'}
        >
        {dataValue}
        </text>
      </g>
    ) 
  }
   
}

export default Bar;

// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

// bar.append("rect")
//     .attr("width", x)
//     .attr("height", barHeight - 1);

// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d) { return d; });
