<script lang="ts" setup>
import { ref } from 'vue';

const tab = ref(0)
</script>

<template>
  <VApp id="app">
    <VMain>
      <div class="text-h2 text-center py-6">Todo</div>
      <VCard class="mx-auto" max-width="800">
        <VCardTitle>
          <VTabs v-model="tab" style="width: auto;">
            <VTab>List view</VTab>
            <VTab>Table view</VTab>
          </VTabs>
          <VSpacer />
          <VBtn color="primary" :to="{name: 'add'}">
            Add
          </VBtn>
        </VCardTitle>
        <VDivider />
        <VCardText>
          <VTabsItems v-model="tab">
            <VTabItem>
              sdsd
            </VTabItem>
            <VTabItem>
              <VDataTable></VDataTable>
            </VTabItem>
          </VTabsItems>
        </VCardText>
      </VCard>

      <RouterView />
    </VMain>
  </VApp>
</template>

