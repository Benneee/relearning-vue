const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(box) {
      // To allow toggle, we can assign the value to their opposite since they are originally boolean values
      if (box === 'A') {
        // this.boxASelected = true;
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount('#styling');
