import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import { darkModeKey } from '@/config.js'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import './css/main.css'

/* Fetch sample data (can be deleted) */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')

/* Dark mode */
const localStorageDarkModeValue = localStorage.getItem(darkModeKey)

if ((localStorageDarkModeValue === null && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorageDarkModeValue === '1') {
  store.dispatch('darkMode')
}

/* Default title tag (shown in BrowserTab) */
const defaultDocumentTitle = 'Die BäckerAI'

/* Collapse mobile aside menu on route change */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} - ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

/* implement used packets */
const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.use(router)
/* keep api Key Secret! */
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAj5ftv3SvxFbeQ8urfMBnJLzBbnFNjpn0'
  }
})
app.mount('#app')
