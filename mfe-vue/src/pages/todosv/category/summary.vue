<template>
  <section>
    <div class="max-w-lg mx-auto border rounded-lg">
      <div class="bg-info flex items-center justify-between h-16 px-4 text-lg font-bold rounded-t-lg">
        <p>Category Summary </p>
        <button>
          <span class="bg-slate-200 text-slate-800 w-18 px-3 py-1 text-sm text-center rounded-full">
            {{ completed }}/{{ total }}
          </span>
        </button>
      </div>
      <ul class="p-0 m-0 list-none">
        <li v-for="category in categorySummary" :key="category.id"
          class="last:rounded-b-lg flex items-center justify-between h-12 px-4 py-2 mb-0 bg-white border-t">
          <span>{{ category.name }}</span>
          <a>
            <span class="inline-block w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
              {{ category.count }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <button @click="handle">click</button>
</template>
<script setup>
import { onBeforeMount, computed, onMounted, onUnmounted } from "vue";
import { todoStore, categoryStore } from '@/store/store.js';

 // Fetch data from server
const getCategorySummary=async ()=>{
  try {
    await categoryStore.get();
    await todoStore.get();
  } catch (error) {
    console.error(error);
  }
  
}
const handle = async () => {
  await todoStore.get();
};
const total= computed(() => {
  // console.log(todoStore.updateTime.toLocaleTimeString());//<span class="text-sm">{{ updateTime.toLocaleTimeString() }}</span>
  console.log("ttt");
  return todoStore.todos.length;
});
const completed = computed(() => {
  return todoStore.todos.filter(todo => todo.completed).length;
});

const categorySummary = computed(() => {
  return categoryStore.categories.map((category) => {
    const count = todoStore.todos.filter((todo) => todo.categoryid === category.id && todo.completed).length;
    return {
      ...category,
      count,
    };
  });
});
onMounted(async () => {
  
})
onUnmounted(async () => {
  
})
onBeforeMount(async () => {
  await getCategorySummary();
})
</script>

<style></style>