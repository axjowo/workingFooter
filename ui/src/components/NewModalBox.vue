<script setup>
import { computed } from 'vue'
import { mdiClose } from '@mdi/js'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import CardComponent from '@/components/CardComponent.vue'
import Divider from '@/components/Divider.vue'
import Overlay from '@/components/Overlay.vue'

const { default: axios } = require('axios')
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  largeTitle: {
    type: String,
    default: null
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'OK'
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  hasItemPass: Boolean,
  item: {
    type: [Number],
    default: null
  },
  table: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const confirmCancel = mode => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')

function handleRemove (table, item) {
  axios.delete(`http://localhost:5000/api_v1/${table}/${item}`)
}
// const post = await axios.delete('http://localhost:5000/vehicles/<license>').then(r => r.json())
</script>

<template>
  <overlay
    v-show="value"
    @overlay-click="cancel"
  >
    <card-component
      v-show="value"
      :title="title"
      class="shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50"
      :header-icon="mdiClose"
      @header-icon-click="cancel"
    >
      <div class="space-y-3">
        <h1
          v-if="largeTitle"
          class="text-2xl"
        >
          {{ largeTitle }}
        </h1>
        <slot />
      </div>

      <divider />

      <jb-buttons>
        <jb-button
          v-if="hasItemPass"
          :label="buttonLabel"
          :color="button"
          :table="table"
          :item="item"
          @click="handleRemove(table, item); confirm();"
        />
        <jb-button
          v-if="hasCancel"
          label="Abbrechen"
          :color="button"
          outline
          @click="cancel"
        />
        <jb-button
          v-else
          :label="buttonLabel"
          :color="button"
          @click="confirm"
        />
      </jb-buttons>
    </card-component>
  </overlay>
</template>
