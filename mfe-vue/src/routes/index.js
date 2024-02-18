import { createRouter, createWebHistory }from 'vue-router';
import SampleLayout from '@/layouts/SampleLayout.vue';
import Overview from '@/pages/todosv/overview.vue';
import Todos from '@/pages/todosv/list.vue';
import Register from '@/pages/todosv/register.vue';
import Category from '@/pages/todosv/category/summary.vue';

const routes = [
  {
    path: "/",
    component : SampleLayout,
    children: [
      {
        path: "main",
        name: "overview",
        component: Overview,
      },
      {
        path: "todos",
        name: "todos",
        component: Todos,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
      {
        path: "category",
        name: "category",
        component: Category,
      },
    ],
  }
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

const router = (baseURL)=>{
  baseURL = baseURL || '/todos';
  return createRouter({
    history: createWebHistory(baseURL),
    routes,
  });
}

export default router;