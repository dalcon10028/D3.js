import * as d3 from "https://cdn.skypack.dev/d3@7";

// Promise
(async () => {
  const getCsv = await d3.csv("../food.csv");
  console.log(getCsv);
})();
