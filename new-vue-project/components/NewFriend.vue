<template>
  <section>
    <form @submit.prevent="confirmData">
      <div class="form-section">
        <label for="name">Full Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          v-model="name"
          required
        />
      </div>
      <div class="form-section">
        <label for="name">Phone Number</label>
        <input
          type="phone"
          placeholder="Enter phone number"
          v-model="phone"
          required
        />
      </div>
      <div class="form-section">
        <label for="name">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          v-model="email"
          required
        />
      </div>
      <button type="submit">Add Friend</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'NewFriend',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },

  emits: ['create-new-friend'],

  methods: {
    confirmData() {
      const newFriend = {
        id: new Date().toISOString(),
        isFavorite: false,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      if (confirm(`Do you wish to add ${newFriend.name} as friend?`)) {
        this.$emit('create-new-friend', newFriend);
      }
    },
  },
};
</script>

<style></style>
