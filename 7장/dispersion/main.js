import * as d3 from "https://cdn.skypack.dev/d3@7";

const app = new Vue({
  el: "#app",

  filters: {
    filteredPos([x, y]) {
      return `(${Math.floor(x)}, ${Math.floor(y)})`;
    },
  },

  data() {
    return {
      w: 500,
      h: 300,
      padding: 20,
      count: 10,
      dataset: [
        [5, 20],
        [480, 90],
        [250, 50],
        [100, 33],
        [330, 95],
        [410, 12],
        [475, 44],
        [25, 67],
        [85, 21],
        [220, 88],
      ],
    };
  },

  computed: {
    // 동적인 척도 적용하기
    xScale() {
      return d3
        .scaleLinear()
        .domain([0, d3.max(this.dataset, (d) => d[0])])
        .range([this.padding, this.w - this.padding * 2]);
    },

    yScale() {
      return d3
        .scaleLinear()
        .domain([0, d3.max(this.dataset, (d) => d[1])])
        .range([this.h - this.padding, this.padding]);
    },

    aScale() {
      return d3
        .scaleSqrt()
        .domain([0, d3.max(this.dataset, (d) => d[1])])
        .range([0, 10]);
    },
  },

  methods: {
    makeDataset(number) {
      const dataset = [];
      while (number--) {
        const rd_x = Math.random() * 480 + 5;
        const rd_y = Math.random() * 85 + 10;
        dataset.push([rd_x, rd_y]);
      }
      this.dataset = dataset;
    },
  },

  template: `
    <div class="container">
      <div class="controller">
        <label>개수</label>
        <input type=number v-model="count" />
        <button @click="makeDataset(count)">랜덤 생성</button>
      </div>  
      
      <svg class="result" :width="w" :height="h">
        <circle
          v-for="d in dataset"
          :cx="xScale(d[0])"
          :cy="yScale(d[1])"
          :r="aScale(d[1])"/>
        <text 
          v-for="d in dataset"
          :x="xScale(d[0])"
          :y="yScale(d[1])">
          {{ d | filteredPos }}
        </text>
      </svg>
    </div>
  `,
});
