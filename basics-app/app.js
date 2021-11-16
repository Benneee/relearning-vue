const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course',
      vueLink: 'https://vuejs.org',
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue';
      } else {
        return 'Finish this course';
      }
    },
  },
});

// Since we only want to control this section of the application
app.mount('#user-goal');
