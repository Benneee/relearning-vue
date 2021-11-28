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
  },
};
</script>

<style></style>
