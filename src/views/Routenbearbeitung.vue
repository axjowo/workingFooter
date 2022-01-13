<!--
<script setup>
import { ref } from 'vue'
import { mdiAccountMultiple, mdiTableBorder } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

const titleStack = ref(['Admin', 'Routenplanung'])
</script>
-->
<script>
// Hier entsteht ein Fehler wenn oben die Sachen nicht auskommentiert werden.
// Liegt an der Verwendung von script setup und scriptS
export default {
  name: 'get-request',
  data () {
    return {
      totalVuePackages: null
    }
  },
  created () {
    // Simple GET request using fetch
    fetch('https://api.npms.io/v2/search?q=vue')
      .then(response => response.json())
      .then(data => (this.totalVuePackages = data.total))
  }
}
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Routenbearbeitung</hero-bar>
    <main-section>
      <card-component
      class="mb-6"
      title="Clients"
      :icon="mdiAccountMultiple"
      has-table
    >
      <clients-table checkable />
    </card-component>

    <title-sub-bar
      :icon="mdiTableBorder"
      title="Wrapped variation"
    />
      <card-component empty />
      <div class="card text-center m-3">
        <h5 class="card-header">Simple GET Request</h5>
        <div class="card-body">Total vue packages: {{totalVuePackages}}</div>
       </div>
    </main-section>
    <bottom-other-pages-section />
</template>
