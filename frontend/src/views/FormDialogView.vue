<script lang="ts">
import Vue from 'vue';
import axios  from 'axios';

export default Vue.extend({
  data() {
    return {
      show: false,
      loading: false,
      snackbar: false,
      formData: {
        description: '',
        status: 'PENDING' as 'PENDING' | 'PROGRESS' | 'DONE',
      },
      errorMessage: ''
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    submitAction() {
      this.loading = true;
      this.errorMessage = '';

      axios.post('http://localhost:3000/todo', this.formData).then(() => {
        this.loading = false;
        this.$router.push('/');
      }).catch((error) => {
        this.loading = false;
        if (error.response && error.response.data.message) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = error.message;
        }
      });
    }
  }
});
</script>

<template>
  <VDialog v-model="show" max-width="600" persistent>
    <VCard :loading="loading" :disabled="loading">
      <VCardTitle>Add</VCardTitle>
      <VCardText>
        <VAlert v-if="errorMessage" type="error" text dense>{{ errorMessage }}</VAlert>
        <VTextField v-model="formData.description" label="Description" placeholder="Enter description" autofocus />
        <VRadioGroup v-model="formData.status" row>
          <VRadio label="Pending" value="PENDING" />
          <VRadio label="Progress" value="PROGRESS" />
          <VRadio label="Done" value="DONE" />
        </VRadioGroup>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text to="/">Cancel</VBtn>
          <VBtn color="primary" @click="submitAction">Submit</VBtn>
        </VCardActions>
      </VCardText>
    </VCard>
  </VDialog>
</template>
