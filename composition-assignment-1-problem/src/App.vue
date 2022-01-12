<template>
  <section>
    <h2 v-if="goalVisibility">My Course Goal: {{ goal }}</h2>
    <!-- <h2 v-if="goalObj.goalVisibility">My Course Goal: {{ goalObj.goal }}</h2> -->
    <!-- <h2 v-if="goalObject.goalVisibility">
      My Course Goal: {{ goalObject.goal }}
    </h2> -->

    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3>OUTPUT COURSE GOAL</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoalVisibility">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </section>
</template>

<script>
// import { ref, reactive } from 'vue';

export default {
  // setup() {
  //   // Separate refs
  //   const goal = ref('Improve my knowledge of Vue.js greatly!');
  //   const goalVisibility = ref(false);

  //   // Ref object
  //   const goalObj = ref({
  //     goal: 'Improve my knowledge of Vue.js greatly!',
  //     goalVisibility: false,
  //   });

  //   // reactive object
  //   const goalObject = reactive({
  //     goal: 'Improve my knowledge of Vue.js greatly!',
  //     goalVisibility: false,
  //   });

  //   function toggleGoalVisibility() {
  //     // goalVisibility.value = !goalVisibility.value;
  //     // goalObj.value.goalVisibility = !goalObj.value.goalVisibility;
  //     goalObject.goalVisibility = !goalObject.goalVisibility;
  //   }

  //   return {
  //     goal,
  //     toggleGoalVisibility,
  //     goalVisibility,
  //     goalObj,
  //     goalObject,
  //   };
  // },

  data() {
    return {
      goal: 'Improve my knowledge of Vue.js greatly!',
      goalVisibility: false,
    };
  },

  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
