<template>
  <div id="app">
    {{ infos }}
  </div>
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
        v-for="info in infos"
        :key="info.license"
      >
        <td data-label="License">
          {{ info.license }}
        </td>
        <td data-label="Capacity">
          {{ info.capacity }}
        </td>
        <td data-label="Costs">
          {{ info.costs }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import ClientsTable from '@/components/ClientsTable.vue'
// import CardComponent from '@/components/CardComponent.vue'
import axios from 'axios'
// import RoutesTable from '@/components/RoutesTable.vue'

export default {
  name: 'GetRequest',
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:5000/vehicles') // https://api.predic8.de/shop/products/
      .then(response => (this.infos = response.data))
  }
}
</script>
