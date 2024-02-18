import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';


function setup(baseURL){
  baseURL = baseURL || "todos";
  console.log(`main.js called: ${baseURL}`);
  createApp(App).use(router(baseURL)).mount('#app');
}

module.exports = setup;