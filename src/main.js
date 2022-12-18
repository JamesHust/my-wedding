// Lib
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Components
import App from './App.vue'
import router from './router/router'

// Plugins
import {loadFonts} from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";

// Style
import "@/assets/main.scss"
import "@/assets/common.scss"

loadFonts()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
