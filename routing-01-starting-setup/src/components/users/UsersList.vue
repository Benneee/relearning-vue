<template>
  <section>
    <button @click="saveChanges">Save Changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  name: 'UserList',
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ['users'],

  methods: {
    saveChanges() {
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    console.log('to: ', to);
    console.log('from: ', from);
    next();
  },

  // This guard is responsible for ensuring the user is ready to leave this component
  // The router calls this guard first before leaving this component
  beforeRouteLeave(to, from, next) {
    console.log('to: ', to);
    console.log('from: ', from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure you want to leave this page? You have unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
