function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMonster() {
      // Formula for setting a random value between two specific values
      // Math.random() * (diff btw the two values) + (the lower value)
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackMonster();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');
