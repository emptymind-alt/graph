import React from 'react';
import * as d3 from 'd3';


const margin = {top: 10, right: 30, bottom: 30, left: 60};
const width = 450 - margin.left - margin.right;
const height = 250 - margin.top - margin.bottom;

class MyComponent extends React.Component {
  componentDidMount() {
    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
   // Parse the Data
    d3.csv("https://raw.githubusercontent.com/emptymind-alt/Asidus/main/rusk.csv").then((data) => {
      const allGroup = new Set(data.map(d => d.month));
     
      d3.select("#selectButton")
        .selectAll('myOptions')
        .data(Array.from(allGroup))
        .enter()
        .append('option')
        .text((d) => d)
        .attr("value", (d) => d);

      const myColor = d3.scaleOrdinal()
        .domain(Array.from(allGroup))
        .range(d3.schemeSet2);
  
  // Add X axis
      const x = d3.scaleLinear()
        .domain(d3.extent(data, (d) => d.date))
        .range([0, width]);
     
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).ticks(7)).remove();
 // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.n)])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y)).remove();

      const line = svg
        .append('g')
        .append("path")
          .datum(data.filter(d => d.month === "January"))
          .attr("d", d3.line()
            .x(d => x(d.date))
            .y(d => y(+d.n))
          )
          .attr("stroke", () => myColor("valueA"))
          .style("stroke-width", 4)
          .style("fill", "none");

      function update(selectedGroup) {
        const dataFilter = data.filter(d => d.month === selectedGroup);
        line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(d => x(d.date))
            .y(d => y(+d.n))
          )
          .attr("stroke", () => myColor(selectedGroup));
      }

      d3.select("#selectButton").on("change", function() {
        const selectedOption = d3.select(this).property("value");
        update(selectedOption);
      });
    });
  }
  

  render() {
      return (
      <>
     
      <div id="my_dataviz">
       
      </div>
      </>
    );
  }
}

export default MyComponent;