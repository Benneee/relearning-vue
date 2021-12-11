<template>
  <ul>
    <li v-for="(goal, index) in goals" :key="`goal-${index}`">
      <!-- To allow the data from here be passed on to the component using this slot component -->
      <slot :item="goal" the-index="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CourseGoals',

  data() {
    return {
      goals: [
        'Finish the course',
        'Learn Vue',
        'Redo apps in Angular',
        'Learn more Vue.js just because...',
      ],
    };
  },
};
</script>
