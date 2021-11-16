const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },

  methods: {
    increaseCount(num) {
      this.counter = this.counter + num;
    },

    decreaseCount(num) {
      //  I don't want negative numbers
      if (this.counter >= 1) {
        this.counter = this.counter - num;
      }
    },

    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount('#events');
