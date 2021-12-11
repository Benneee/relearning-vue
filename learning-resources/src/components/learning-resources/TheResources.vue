<template>
  <section>
    <base-card>
      <base-button
        @click="selectComponent('stored-resources')"
        :mode="storedResourcesBtnMode"
      >
        Stored Resources</base-button
      >
      <base-button
        @click="selectComponent('add-resource')"
        :mode="addResourceBtnMode"
      >
        Add New Resource</base-button
      >
    </base-card>
    <keep-alive>
      <Component :is="selectedTab" />
    </keep-alive>
  </section>
</template>

<script>
import AddResource from '@/components/learning-resources/AddResource.vue';
import StoredResources from '@/components/learning-resources/StoredResources.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseButton from '@/components/base/BaseButton.vue';

export default {
  name: 'TheResources',

  components: {
    BaseCard,
    BaseButton,
    AddResource,
    StoredResources,
  },

  computed: {
    storedResourcesBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },

    addResourceBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },

  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The largest dev helper',
          link: 'https://google.com',
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },

  methods: {
    selectComponent(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>

<style></style>
