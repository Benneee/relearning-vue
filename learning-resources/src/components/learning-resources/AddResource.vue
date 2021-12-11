<template>
  <section>
    <base-dialog
      v-if="inputIsInvalid"
      :title="'Invalid Input'"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid</p>
        <p>
          Please, check all inputs and make sure you enter at least a few
          characters into each input field
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" ref="titleInput" name="title" id="title" />
        </div>

        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            ref="descInput"
            name="description"
            id="description"
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <div class="form-control">
          <label for="link">Link</label>
          <input ref="linkInput" type="url" id="link" name="link" />
        </div>

        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/base/BaseCard.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseDialog from '@/components/base/BaseDialog.vue';

export default {
  name: 'AddResource',
  inject: ['addResource'],

  components: {
    BaseCard,
    BaseButton,
    BaseDialog,
  },

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(title, description, link);
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
