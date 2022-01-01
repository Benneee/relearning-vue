<template>
  <section>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <!-- <transition>
      <p v-if="paraIsVisible">This is only sometimes visible....</p>
      </transition> -->
      <!-- For cases when we have multiple transition components in the template -->
      <!-- We add the "name" attribute so vue.js can identify the customised classes for the transition -->
      <transition name="para" 
          @before-enter="beforeEnter" 
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
      >
        <p v-if="paraIsVisible">This is only sometimes visible....</p>
      </transition>
      <button @click="toggleParagraph">Toggle paragraph</button>
    </div>
    <div class="container">
      <transition name="fade-btn" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">
          Show Users
        </button>
        <button @click="hideUsers" v-else>
          Hide Users
        </button>
      </transition>
    </div>
      <base-modal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
      </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </section>
</template>

<script>
import BaseModal from './components/BaseModal.vue';

export default {
  components: {
    BaseModal,
  },

  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false
    };
  },

  methods: {
    beforeEnter(element) {
      console.log('before enter: ', element)
    },

    beforeLeave(element) {
      console.log('before leave: ', element)
    },

    enter(element) {
      console.log('enter: ', element)
    },

    afterEnter(element) {
      console.log('after enter: ', element)
    },

    leave(element) {
      console.log('leave: ', element)
    },

    afterLeave(element) {
      console.log('after leave: ', element)
    },

    animateBlock() {
      this.animatedBlock = true;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },

    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },

    hideUsers() {
      this.usersAreVisible = false
    },

    showUsers() {
      this.usersAreVisible = true
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

/* For the transition component */
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-active {
  animation: slide-scale 0.3s ease-out;
} */

/* For when we have several transition components in the template */
.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* For the transition component */
/* .v-leave-from {
   opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-active {
  animation: slide-scale 0.3s ease-out;
} */

/* For when we have several transition components in the template */
.para-leave-active {
  animation: slide-scale 0.3s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}
.fade-btn-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-btn-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-btn-enter-to, 
.fade-btn-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-150px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
