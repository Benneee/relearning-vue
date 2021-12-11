<template>
  <section>
    <TheHeader :title="'RememberMe'" />
    <!-- <StoredResources :storedResources="storedResources" /> -->
    <TheResources />
  </section>
</template>

<script>
// import StoredResources from '@/components/learning-resources/StoredResources.vue';
import TheHeader from '@/components/layout/TheHeader';
import TheResources from '@/components/learning-resources/TheResources.vue';

export default {
  components: {
    // StoredResources,
    TheHeader,
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
