<template>
  <section>
    <li>
      <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
      <button @click="toggleFavorite(friend.id)">Toggle Favorite</button>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
      <button @click="deleteFriend(friend.id)">Delete</button>
    </li>
  </section>
</template>

<script>
export default {
  name: 'FriendContact',
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  // Mainly for documentation purposes
  emits: ['toggle-favorite', 'delete-friend'],
  // emits: {
  //   'toggle-favorite': (id) => {
  //     if (id) {
  //       console.log('We good!');
  //       return true;
  //     } else {
  //       console.warn('ID argument is missing!');
  //       return false;
  //     }
  //   },
  // },

  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite(id) {
      this.$emit('toggle-favorite', id);
    },

    deleteFriend(id) {
      this.$emit('delete-friend', id);
    },
  },
};
</script>

<style></style>
