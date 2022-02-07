<script setup>
import MainSection from '@/components/MainSection.vue'
import { ref } from 'vue'
import DemandPrediction from '@/components/DemandPrediction.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import { mdiArrowTopRightThin } from '@mdi/js'
import Notification from '@/components/Notification.vue'
const { default: axios } = require('axios')

const titleStack = ref(['Start', 'Vorhersage'])
const msg = ref([])
function startOptimizer () {
  axios
    .get('http://localhost:5000/api_v1/start_prediction')
    .then(response => {
      msg.value = response.data.data
    })
}
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Vorhersage</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      title="Vorhersage"
      :icon="mdiArrowTopRightThin"
      has-table
    >
      <demand-prediction />
    </card-component>
    <button
      type="submit"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      @click="startOptimizer"
    >
      Starte Vorhersage
    </button>
    <notification
      color="info"
      :icon="mdiMonitorCellphone"
    >
      Wurde gestarted!
    </notification>
  </main-section>
</template>
