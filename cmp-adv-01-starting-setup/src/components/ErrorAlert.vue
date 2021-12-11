<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: 'ErrorAlert',
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  margin: 0;
  width: 40%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
