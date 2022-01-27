<script setup>
import MainSection from '@/components/MainSection.vue'
import RoutesTable from '@/components/RoutesTable2.vue'
import CardComponent from '@/components/CardComponent.vue'

</script>

<template>
  <main-section>
    <card-component
      class="mb-6"
      title="Clients"
      :icon="mdiAccountMultiple"
      has-table
    >
      <routes-table checkable />
    </card-component>
  </main-section>
</template>
