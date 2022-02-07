<script setup>
import { onMounted, ref } from 'vue' // , inject, computed
// import { useStore } from 'vuex'
import { mdiTrashCan, mdiPencil } from '@mdi/js'
import ModalBox from '@/components/ModalBox.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

const { default: axios } = require('axios')

// sets status for Edit and delete Button
const isModalActive = ref(false)
const isModalDangerActive = ref(false)
const table = 'routes'
const routes = ref([])
onMounted(async () => {
  await axios
    .get(`http://localhost:5000/api_v1/${table}`)
    .then(response => {
      routes.value = response.data.data
    })
})
</script>

<template>
  <modal-box
    v-model="isModalActive"
    title="Bearbeitungsfeld"
  >
    <p>Hier soll ein Bearbeitungformular entstehen</p>
  </modal-box>

  <modal-box
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
  </modal-box>
  <table>
    <thead>
      <tr>
        <th>Routen ID</th>
        <th>Strecke</th>
        <th>Start</th>
        <th>Ende</th>
        <th>Wartezeit</th>
        <th>Duration</th>
        <th>id_driver</th>
        <th>id_vehicle</th>
        <th>is_standard</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="route in routes"
        :key="route.id_route"
      >
        <td data-label="Routen ID">
          {{ route.id_route }}
        </td>
        <td data-label="Strecke">
          {{ route.distance }}
        </td>
        <td data-label="Start">
          {{ route.starting_time }}
        </td>
        <td data-label="Ende">
          {{ route.end_time }}
        </td>
        <td data-label="Wartezeit">
          {{ route.waiting_time }}
        </td>
        <td data-label="Duration">
          {{ route.duration }}
        </td>
        <td data-label="id_driver">
          {{ route.id_driver }}
        </td>
        <td data-label="id_vehicle">
          {{ route.id_vehicle }}
        </td>
        <td data-label="is_standard">
          {{ route.is_standard }}
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
              @click="isModalDangerActive = true; item= route.id_route"
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
