const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      visibility: 'visible',
      bgColor: '',
    };
  },

  methods: {
    showOrHide() {
      if (this.visibility == 'hidden') {
        this.visibility = 'visible';
      } else {
        this.visibility = 'hidden';
      }
    },
  },
});

app.mount('#assignment');
