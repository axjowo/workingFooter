<script setup>
import { ref } from 'vue'
import { mdiRoutes } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import CardComponent from '@/components/CardComponent.vue'
import RoutesTable from '@/components/RoutesTable.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'

const titleStack = ref(['Start', 'Routenbearbeitung'])

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Routenbearbeitung</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      title="Fahrzeuge"
      :icon="mdiRoutes"
      has-table
    >
      <routes-table />
    </card-component>
  </main-section>
  <bottom-other-pages-section />
</template>
