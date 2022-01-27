<script setup>
import MainSection from '@/components/MainSection.vue'
import VehiclesTable from '@/components/VehiclesTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import { mdiTruck } from '@mdi/js'

</script>

<template>
  <main-section>
    <card-component
      class="mb-6"
      title="Fahrzeuge"
      :icon="mdiTruck"
      has-table
    >
      <vehicles-table />
    </card-component>
  </main-section>
</template>
