<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',

  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

/* type 1 */
.frontend {
  background-color: #3d008d;
  color: white;
}

/* type 2 */
.backend {
  background-color: #71008d;
  color: white;
}

/* type 2 */
.career {
  background-color: #8d006e;
  color: white;
}
</style>
