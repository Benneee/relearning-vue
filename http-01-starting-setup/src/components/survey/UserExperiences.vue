<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  name: 'UserExperiences',

  components: {
    BaseButton,
    BaseCard,
    SurveyResult,
  },

  data() {
    return {
      results: [],
    };
  },

  methods: {
    loadExperiences() {
      fetch('https://vue-survey-c996c-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => console.log('error: ', error));
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
