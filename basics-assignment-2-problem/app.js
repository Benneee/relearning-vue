const app = Vue.createApp({
  data() {
    return {
      keydownInput: '',
      enterKeyInput: '',
    };
  },

  methods: {
    showAlert() {
      alert('I clicked!');
    },

    showInput(e) {
      this.keydownInput = e.target.value;
    },

    showEnterInput(e) {
      this.enterKeyInput = e.target.value;
    },
  },
});

app.mount('#assignment');
