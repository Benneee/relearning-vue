const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },

  methods: {
    increaseCount(num) {
      this.counter = this.counter + num;
    },

    decreaseCount(num) {
      this.counter = this.counter - num;
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

    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
