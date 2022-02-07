<script setup>
import { onMounted, ref } from 'vue' // , inject, computed
// import { useStore } from 'vuex'
import { mdiTrashCan, mdiPencil } from '@mdi/js'
import NewModalBox from '@/components/NewModalBox.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

const { default: axios } = require('axios')
/*
const props = defineProps({
  isModalDangerActive: Boolean,
  item: {
    type: Number,
    default: null
  }
})
*/
// sets status for Edit and delete Button, and here we need to übergeben den item value
const isModalActive = ref(false)
const isModalDangerActive = ref(false)
/*
const props = defineProps({
  item: {
    type: [Number],
    default: null
  }
})
*/
const table = 'vehicles'
const vehicles = ref([])
// check life
onMounted(async () => {
  await axios
    .get(`http://localhost:5000/api_v1/${table}`)
    .then(response => {
      vehicles.value = response.data.data
    })
})
</script>

<template>
  <new-modal-box
    v-model="isModalActive"
    title="Bearbeitungsfeld"
  >
    <p>Hier soll ein Bearbeitungformular entstehen</p>
  </new-modal-box>
  <!-- here the item gets passed -->
  <new-modal-box
    v-model="isModalDangerActive"
    large-title="Bitte Bestätigen"
    button="danger"
    has-cancel
    has-item-pass
    :table="table"
    :item="item"
  >
    <p><b>Wollen sie den Datensatz wirklich löschen?</b></p>
    <p>Falls noch eine Zeile gebraucht wird</p>
  </new-modal-box>
  <table>
    <thead>
      <tr>
        <th>Nummernschild</th>
        <th>Kapazität</th>
        <th>Kosten</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="vehicle in vehicles"
        :key="vehicle.id_vehicle"
      >
        <td data-label="license">
          {{ vehicle.license }}
        </td>
        <td data-label="capacity">
          {{ vehicle.capacity }}
        </td>
        <td data-label="costs">
          {{ vehicle.costs }}
        </td>
        <td class="actions-cell">
          <jb-buttons
            type="justify-start lg:justify-end"
            no-wrap
          >
            <jb-button
              color="info"
              :icon="mdiPencil"
              small
              @click="isModalActive = true"
            />
            <jb-button
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true; item= vehicle.id_vehicle"
            />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    <level>
      &nbsp;
    </level>
  </div>
</template>
