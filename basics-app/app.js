const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn Vue',
      //   courseGoalB: '<h2 style="color: #fff">Finish this course</h2>',
      courseGoalB: 'Finish this course',
      vueLink: 'https://vuejs.org',
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

// Since we only want to control this section of the application
app.mount('#user-goal');
