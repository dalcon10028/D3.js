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
      h: 100,
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
      
      <svg class="result">
        <circle
          v-for="(d, i) in dataset"
          :cx="d[0]"
          :cy="d[1]"
          :r="Math.sqrt(h - d[1])" />
        <text 
          v-for="(d, i) in dataset"
          :x="d[0]"
          :y="d[1]">
          {{ d | filteredPos }}
        </text>
      </svg>
    </div>
  `,
});
