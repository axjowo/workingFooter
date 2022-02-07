<script setup>
import { ref } from 'vue'
import { mdiRoutes } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import CardComponent from '@/components/CardComponent.vue'
import RoutesTable from '@/components/RoutesTable.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import Notification from '@/components/Notification.vue'
// import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
const { default: axios } = require('axios')
const titleStack = ref(['Start', 'Routenbearbeitung'])
const msg = ref([])
function startOptimizer () {
  axios
    .get('http://localhost:5000/api_v1/start_solver')
    .then(response => {
      msg.value = response.data.data
    })
}
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Routenbearbeitung</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      title="Routen"
      :icon="mdiRoutes"
      has-table
    >
      <routes-table />
    </card-component>
    <button
      type="submit"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      @click="startOptimizer"
    >
      Starte Routenoptimierung
    </button>
    <notification
      color="info"
      :icon="mdiMonitorCellphone"
    >
      Wurde gestarted!
    </notification>
  </main-section>
</template>
