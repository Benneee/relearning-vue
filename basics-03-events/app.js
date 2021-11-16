const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCount() {
      this.counter++;
    },

    decreaseCount() {
      //  I don't want negative numbers
      if (this.counter >= 1) {
        this.counter--;
      }
    },
  },
});

app.mount('#events');
