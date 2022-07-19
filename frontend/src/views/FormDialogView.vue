<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      show: false,
      loading: false,
      formData: {
        description: '',
        status: 'PENDING' as 'PENDING' | 'PROGRESS' | 'DONE',
      }
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    submitAction() {
      axios.post('http://localhos:3000/todos')
    }
  }
});
</script>

<template>
  <VDialog v-model="show" max-width="600" persistent>
    <VCard>
      <VCardTitle>Add</VCardTitle>
      <VCardText>
        <VTextField v-model="formData.description" label="Description" placeholder="Enter description" autofocus />
        <VRadioGroup v-model="formData.status" row>
          <VRadio label="Pending" value="PENDING" />
          <VRadio label="Progress" value="PROGRESS" />
          <VRadio label="Done" value="DONE" />
        </VRadioGroup>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text to="/">Cancel</VBtn>
          <VBtn color="primary">Submit</VBtn>
        </VCardActions>
      </VCardText>
    </VCard>
  </VDialog>
</template>
