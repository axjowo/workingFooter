<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level.vue'
import JbLogo from '@/components/JbLogo.vue'

const store = useStore()

const year = computed(() => new Date().getFullYear())

const isFooterBarVisible = computed(() => !store.state.isFullScreen)
</script>

<template>
  <footer
    v-show="isFooterBarVisible"
    class="bg-white py-2 px-6 dark:bg-gray-900"
  >
    <level>
      <div class="text-center md:text-left">
        <b>&copy; {{ year }}, <a
          href="https://dasistderanderelink.de/"
          target="_blank"
        >Hier könnte ihre Werbung stehen</a>. </b>
        <a
          href="https://dasistderlink.de"
          target="_blank"
          class="text-blue-500"
        >Link ins Nirvana</a>
      </div>
      <div class="md:py-2">
        <a href="https://justboil.me">
          <jb-logo class="w-auto h-8 md:h-6" />
        </a>
      </div>
    </level>
  </footer>
</template>
