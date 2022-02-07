<script setup>
import { ref } from 'vue'
import MainSection from '@/components/MainSection.vue'

const center = ref({ lat: 51.093048, lng: 6.842120 })
const markers = ref([
  {
    position: {
      lat: 51.093048, lng: 6.842120
    }
  } // Along list of clusters
])
</script>

<template>
  <main-section>
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 400px; height: 400px"
    >
      <GMapCluster>
        <GMapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GMapCluster>
    </GMapMap>
  </main-section>
</template>
