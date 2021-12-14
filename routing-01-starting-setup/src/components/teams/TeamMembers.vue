<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>

    <router-link to="/teams/t3">Go To Team 3</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  name: 'TeamMembers',

  components: {
    UserItem,
  },

  data() {
    return {
      teamName: '',
      members: [],
    };
  },

  inject: ['users', 'teams'],

  props: {
    teamId: {
      type: String,
      required: true,
    },
  },

  created() {
    this.getTeamAndMembers(this.teamId);
    console.log('query: ', this.$route.query);
  },

  // Mainly used in reusable components
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteEnter');
    console.log('to: ', to);
    console.log('from: ', from);
    next();
  },

  watch: {
    teamId(newId) {
      this.getTeamAndMembers(newId);
    },
  },

  methods: {
    getTeamAndMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      if (!selectedTeam) {
        return;
      }

      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
