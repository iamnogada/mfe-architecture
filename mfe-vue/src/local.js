import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

function setup(baseURL){
  baseURL = baseURL || "todos";
  console.log(`main.js called: ${baseURL}`);
  createApp(App).use(vuetify).use(router(baseURL)).mount('#app');
}

setup("todos");