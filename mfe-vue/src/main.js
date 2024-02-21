import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index.js'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'

loadFonts()


function setup(baseURL){
  baseURL = baseURL || "todos"
  console.log(`main.js called: ${baseURL}`)
  const pinia = createPinia()
  createApp(App).use(vuetify).use(pinia).use(router(baseURL)).mount('#app')
}

setup("todos")
export default setup;