<template>
  <div>
    <TheHeader />
    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    /> -->
    <!-- <course-goals> -->
    <!-- You can gain access to that slot's data which is the iterated item in the array -->
    <!-- So all the props data available in the slot component is now available in slotProps -->
    <!-- <template #default="slotProps"> -->
    <!-- Since we used item for the goals item -->
    <!-- <h2>{{ slotProps.item }}</h2> -->
    <!-- It is important to know that Vue will not change the prop name -->
    <!-- <p>{{ slotProps['the-index'] }}</p> -->
    <!-- </template> -->
    <!-- </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <component :is="selectedComponent"></component>
    <!-- <ActiveGoals />
    <ManageGoals /> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
    // UserInfo,
    // BadgeList,
    // CourseGoals,
  },

  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
