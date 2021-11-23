const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      fullName: '',
    };
  },

  computed: {
    // fullName() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Nk';
    // },
  },

  watch: {
    // Whenever the name property above in data changes,
    // this watcher runs
    name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        value + ' ' + 'Nk';
      }
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
