// The functions created outside the scope here makes it easy for us to call the function within the Vue object scope

// Formula for setting a random value between two specific values
// Math.random() * (diff btw the two values) + (the lower value)
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },

  computed: {
    monsterHealthBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },

    playerHealthBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },

    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //   We have a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        //   Player lost
        this.winner = 'monster';
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //   We have a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        //   Monster lost
        this.winner = 'player';
      }
    },
  },

  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },

    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },

    // The special attack should only be available every 3 rounds
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    healPlayer() {
      // Healing the player should increase the round
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHealth =
        this.playerHealth + healValue > 100
          ? 100
          : this.playerHealth + healValue;

      this.addLogMessage('player', 'heal', healValue);

      // Monster should also attack after a healing session
      this.attackPlayer();
    },

    surrender() {
      this.winner = 'monster';
      this.addLogMessage('player', 'surrenders', 0);
    },

    addLogMessage(who, what, value) {
      const newMessage = {
        actionBy: who,
        actionType: what,
        actionValue: value,
      };

      // We want the new messages to be on top of the list at all time
      this.logMessages.unshift(newMessage);
    },
  },
});

app.mount('#game');
