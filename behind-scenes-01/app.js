const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is the greatest!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },

  beforeCreate() {
    console.log('beforeCreate()');
  },

  created() {
    console.log('created()');
  },

  beforeMount() {
    console.log('beforeMount()');
  },

  mounted() {
    console.log('mounted()');
  },

  // The two cycles only run when a change occurs in the app
  beforeUpdate() {
    console.log('beforeUpdate()');
  },

  updated() {
    console.log('updated()');
  },
});

app.mount('#app');

const data = {
  message: 'Hello',
  longMessage: 'Hello! World!',
};

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});

app2.mount('#app2');

// Proxy allows a handler object containing set and get methods
const handler = {
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);

    // Make sure longMessage changes when we change the message property
    if (key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);

// The setter function is triggered when a property within the data object changes to a new value
// We also get access to the old property
