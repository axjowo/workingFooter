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

const demands = ref([])
onMounted(async () => {
  await axios
    .get('http://localhost:5000/api_v1/delivery_demand')
    .then(response => {
      demands.value = response.data.data
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
  >
    <p><b>Wollen sie den Datensatz wirklich löschen?</b></p>
    <p>Falls noch eine Zeile gebraucht wird</p>
  </modal-box>
  <table>
    <thead>
      <tr>
        <th>Store ID</th>
        <th>Produkt Gruppe ID</th>
        <th>Ziel Datum</th>
        <th>Ziel Wert</th>
        <th>Wartezeit</th>
        <th>ypred_final</th>
        <th>Produkt Familie</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="demand in demands"
        :key="demand.id_store"
      >
        <td data-label="Store ID">
          {{ demand.id_store }}
        </td>
        <td data-label="Produkt Gruppe ID">
          {{ demand.id_product_group }}
        </td>
        <td data-label="Ziel Datum">
          {{ demand.target_date }}
        </td>
        <td data-label="Ziel Wert">
          {{ demand.target_value }}
        </td>
        <td data-label="ypred_final">
          {{ demand.ypred_final }}
        </td>
        <td data-label="Produkt Familie">
          {{ demand.product_family }}
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
              @click="isModalDangerActive = true"
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
