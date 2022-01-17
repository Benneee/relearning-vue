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
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const { alertIsVisible, showAlert, hideAlert } = useAlert();

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
  },
};
</script>
