const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
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

    confirmInput() {
      this.confirmedName = this.name;
    },

    setName(event) {
      this.name = event.target.value;
    },

    submitForm() {
      alert('submitted');
    },
  },
});

app.mount('#events');
