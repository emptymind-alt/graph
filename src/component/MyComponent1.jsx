import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import './Card.css';

const margin = {top: 40, right: 30, bottom: 60, left: 60},
    width = 360 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


    const Stdata=[ "Jan"," ","Feb"," ","Mar"," ","Apr"," ","May"," ","Jun"];
 class MyComponent1 extends React.Component {
        componentDidMount() {
// append the svg object to the body of the page
const svg = d3.select("#my_dataviz1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
  
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Parse the Data
d3.csv("https://raw.githubusercontent.com/emptymind-alt/Asidus/main/food.csv").then( function(data) {
    
  // List of subgroups = header of the csv files = soil condition here
  const subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = data.map(d => (d.group))

  // Add X axis
  const x = d3.scaleBand()
      .domain(groups)
      .range([0, 350])
      .padding([0.6])
      
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickSizeOuter(0)).remove();

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 60])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y)).remove();

  // color palette = one color per subgroup
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#4daf4a','#377eb8'])

  //stack the data? --> stack per subgroup
  const stackedData = d3.stack()
    .keys(subgroups)
    (data)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
      .attr("fill", d => color(d.key))
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(d => d)
      .join("rect")
        .attr("x", d => x(d.data.group))
        
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width",x.bandwidth())
})
        }

render() {
    return (
    <>
   
    <div className="bar" id="my_dataviz1">
     
    </div>
    <div className='stack'>{Stdata}</div>
    </>
  );
}
}
    

export default MyComponent1;
