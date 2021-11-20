const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },

  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nk';
    },
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

    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nk';
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
