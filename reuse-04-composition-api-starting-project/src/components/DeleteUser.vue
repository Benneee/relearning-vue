<template>
  <section>
    <user-alert
      v-if="alertIsVisible"
      title="Delete the User?"
      @close="hideAlert"
    >
      <p>Do you want to continue with deleting a user?</p>
    </user-alert>
    <div>
      <h2>Delete a User</h2>
      <button @click="showAlert">Delete User</button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertIsVisible = ref(false);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
  },
};
</script>
