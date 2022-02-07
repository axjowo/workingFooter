<script setup>
import { ref } from 'vue' // , inject, computed
// import { useStore } from 'vuex'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import { mdiTruck, mdiTrashCan, mdiPencil } from '@mdi/js'
import ModalBox from '@/components/ModalBox.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

const { default: axios } = require('axios')

function handleRemove (id) {
  axios.delete('http://localhost:5000/api_v1/vehicles/' + id)
}
/**
const vMyDirective = {
  data: (el) => {
    // do something with the element
  }
}
*/
const center = ref({ lat: 51.093048, lng: 6.842120 })
const markers = ref([
  {
    position: {
      lat: 51.093048, lng: 6.842120
    }
  } // Along list of clusters
])
/*
const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const items = computed(() => store.state.vehicles)

const perPage = ref(5)

const currentPage = ref(0)

const itemsPaginated = computed(
  () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})
*/
</script>

<template>
  <div> Hello World</div>
  <button
    type="button"
    class="btn btn-danger pull-right"
    data-toggle="modal"
    @click="handleRemove(id)"
  >
    Delete
  </button>
  <main-section>
    <modal-box
      v-model="isModalActive"
      title="Sample modal"
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </modal-box>

    <modal-box
      v-model="isModalDangerActive"
      large-title="Please confirm"
      button="danger"
      has-cancel
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </modal-box>
    <card-component
      class="mb-6"
      title="Vehicles"
      :icon="mdiTruck"
      has-table
    >
      <table>
        <thead>
          <tr>
            <th>License</th>
            <th>Capacity</th>
            <th>Costs</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="vehicle in vehicles"
            :key="vehicle.license"
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
                  color="success"
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
    </card-component>
  </main-section>
  <main-section>
    <div
      id="map"
      class="md:w-10/12 shadow-2xl md:mx-auto"
      style="height: 400px"
    >
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
    </div>
  </main-section>
</template>

<style>

  map {
    width: 100%;
    height: 400px;
    background-color: grey;
}
</style>
