import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';


let baseURL = "todosv";
const VueApp = createApp(App);
VueApp.use(router).mount('#app');
console.log(`Vue App Config:${VueApp.cofig}`);