import './styles/output.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles' // Styles de Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // Enregistrer les composants automatiquement
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
