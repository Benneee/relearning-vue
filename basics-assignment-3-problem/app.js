const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },

  computed: {
    currentPosition() {
      if (this.result < 37 && this.result > 0) {
        return 'Not there yet';
      } else if (this.result > 37) {
        return 'Too much!';
      } else {
        return 0;
      }
    },
  },

  watch: {
    result(value) {
      if (value > 0) {
        setTimeout(() => {
          this.result = 0;
        }, 5000);
      }
    },
  },

  methods: {
    increaseNumber(number) {
      this.result += number;
    },
  },
});

app.mount('#assignment');
