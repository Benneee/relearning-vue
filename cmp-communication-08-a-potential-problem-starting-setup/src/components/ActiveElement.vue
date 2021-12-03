<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  name: 'ActiveElement',
  props: ['topicTitle', 'text'],
};
</script>
