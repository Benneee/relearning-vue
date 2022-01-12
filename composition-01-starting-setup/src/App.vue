<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h3>Lives at {{ user.address }}</h3>
    <h3>Enjoys {{ user.hobby }}</h3>

    <h3>Supports {{ club.name }}</h3>
    <h3>Best player: {{ club.player }}</h3>
    <h3>Jersey Number: {{ club.jerseyNumber }}</h3>

    <button @click="setJerseyNumber">Change Jersey Number</button>

    <div>
      <input type="text" @input="setFirstName" placeholder="Enter first name" />
      &nbsp;
      <input type="text" @input="setLastName" placeholder="Enter last name" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  setup() {
    // const userName = ref('Maximilian');
    const userAge = ref(31);

    const firstName = ref('');
    const lastName = ref('');

    // To use ref with objects
    const user = ref({
      hobby: 'swimming',
      address: 'lagos',
    });

    // If we want to use an object, we can simply import the reactive method,
    // It's just like ref but it was designed mainly for objects
    // and it strips away the need to point to value object before accessing properties in
    // the object

    const club = reactive({
      position: 'midfield',
      player: 'keita',
      jerseyNumber: 8,
      name: 'liverpool fc',
    });

    // To show that ref is reactive
    // setTimeout(() => {
    //   userName.value = 'Max';
    //   user.value.hobby = 'gaming';
    //   user.value.address = 'sydney';

    //  shows that using "reactive" for objects is a less stressful approach
    //   club.position = 'forward';
    //   club.player = 'salah';
    //   club.jerseyNumber = 11;
    // }, 3000);

    // For methods, normally, we would create a methods object and
    // house all our needed methods inside it
    // Here, the needed methods are written as simple JavaScript functions
    // and added in the return object
    function setJerseyNumber() {
      club.jerseyNumber = 15;
    }

    function setFirstName(e) {
      firstName.value = e.target.value;
    }

    function setLastName(e) {
      lastName.value = e.target.value;
    }

    // For computed properties, we work with a "computed" method imported from vue
    // that receives a function that returns the computed value we desire
    // The name of the computed method's function should be the name of the computed property in
    // the template
    const userName = computed(() => `${firstName.value} ${lastName.value}`);

    // You need to return what you want to expose to the template in the return object
    return {
      userName,
      age: userAge,
      user,
      club,
      setJerseyNumber,
      setFirstName,
      setLastName,
      firstName,
      lastName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
