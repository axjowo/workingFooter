<script setup>
// ToDo: only if time, change that if SideBar collapses icons are still shown
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiMenu } from '@mdi/js'
import AsideMenuList from '@/components/AsideMenuList.vue'
import NavBarItem from '@/components/NavBarItem.vue'
import Icon from '@/components/Icon.vue'

defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const store = useStore()

const isFullScreen = computed(() => store.state.isFullScreen)

const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

const isAsideLgActive = computed(() => store.state.isAsideLgActive)

const asideLgClose = () => {
  store.dispatch('asideLgToggle', false)
}

const menuClick = (event, item) => {
  //
}
</script>

<template>
  <aside
    v-show="!isFullScreen"
    id="aside"
    class="w-60 fixed top-0 z-40 h-screen bg-gray-800 transition-position lg:left-0 dark:bg-gray-900"
    :class="[ isAsideMobileExpanded ? 'left-0' : '-left-60', isAsideLgActive ? 'block' : 'lg:hidden xl:block' ]"
  >
    <div class="flex flex-row w-full bg-gray-800 text-white flex-1 h-14 items-center dark:bg-gray-900">
      <nav-bar-item
        type="hidden lg:flex xl:hidden"
        active-color="text-white"
        active
        @click="asideLgClose"
      >
        <icon
          :path="mdiMenu"
          class="cursor-pointer"
          size="24"
        />
      </nav-bar-item>
      <span style="padding-right:3px; padding-top: 3px; display:inline-block; ">
        <img
          class="manImg"
          src="@/assets/Logo_lang.png"
        >
      </span>
    </div>
    <div>
      <template v-for="(menuGroup, index) in menu">
        <p
          v-if="typeof menuGroup === 'string'"
          :key="`a-${index}`"
          class="p-3 text-xs uppercase text-gray-400"
        >
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :key="`b-${index}`"
          :menu="menuGroup"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>
