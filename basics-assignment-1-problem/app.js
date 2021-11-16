const app = Vue.createApp({
  data() {
    return {
      userName: 'Benedict',
      userAge: 29,
      imageFromGoogle:
        'https://images.pexels.com/photos/1391421/pexels-photo-1391421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    };
  },

  methods: {
    faveNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
