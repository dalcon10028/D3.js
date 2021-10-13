const app = new Vue({
  el: "#app",

  data() {
    return {
      w: 500,
      h: 100,
      barPadding: 1,
      count: 20,
      dataset: [
        5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18,
        23, 25,
      ],
    };
  },

  methods: {
    makeDataset(number) {
      const dataset = [];
      while (number--) dataset.push(Math.floor(Math.random() * 20) + 5);
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
        <rect 
          v-for="(d, i) in dataset"
          :x="i * (w / dataset.length)"
          :y="h - d * 4"
          :width="w / dataset.length - barPadding"
          :height="d * 4"
          :fill="'rgb(0, 0, ' + Math.round(d * 10) + ')'" />
        <text 
          v-for="(d, i) in dataset"
          :x="i * (w / dataset.length) + 5"
          :y="h - d * 4 + 15">
          {{ d }}
        </text>
      </svg>
    </div>
  `,
});
