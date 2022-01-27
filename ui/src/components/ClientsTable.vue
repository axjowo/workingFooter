<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import ModalBox from '@/components/ModalBox.vue'
import CheckboxCell from '@/components/CheckboxCell.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

defineProps({
  checkable: Boolean
})
const { default: axios } = require('axios')

const vehicles = ref([])
onMounted(async () => {
  await axios
    .get('http://localhost:5000/vehicles')
    .then(response => {
      vehicles.value = response.data.data
    })
})
const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const items = computed(() => store.state.vehicles)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(5)

const currentPage = ref(0)

const checkedRows = ref([])

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

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach(item => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, vehicle) => {
  if (isChecked) {
    checkedRows.value.push(vehicle)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === vehicle.license)
  }
}
</script>

<template>
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

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>license</th>
        <th>Capacity</th>
        <th>Costs</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="vehicle in itemsPaginated"
        :key="vehicle.license"
      >
        <checkbox-cell
          v-if="checkable"
          @checked="checked($event, vehicle)"
        />
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
              :icon="mdiEye"
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
  <div class="table-pagination">
    <level>
      <jb-buttons>
        <jb-button
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click="currentPage = page"
        />
      </jb-buttons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </level>
  </div>
</template>
