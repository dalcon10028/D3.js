import * as d3 from "https://cdn.skypack.dev/d3@7";

const w = 500;
const h = 50;

//Data
var dataset = [5, 10, 15, 20, 25];

//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

var circles = svg.selectAll("circle").data(dataset).enter().append("circle");

circles
  .attr("cx", (d, i) => i * 50 + 25)
  .attr("cy", h / 2)
  .attr("r", (d) => d);
