<template>
  <form
    id="todoform"
    class="flex flex-row gap-4 p-4 bg-white rounded shadow-md"
  >
    <div class="flex flex-col flex-grow gap-4">
      <div class="flex items-center">
        <label for="todo" class="w-1/4">Todo</label>
        <textarea
          name="todo"
          id="todo"
          placeholder="Enter your todo"
          class="focus:ring-blue-500 focus:border-blue-500 w-3/4 p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div class="flex items-center">
        <label for="category" class="w-1/4">Category</label>
        <select
          name="categoryid"
          id="categoryid"
          class="focus:ring-blue-500 focus:border-blue-500 w-3/4 p-2 border border-gray-300 rounded"
        >
              <option value=-1>-select-</option>
              <option v-for="category in categoryStore.categories" :key="category.id" :value="category.id">{{category.name}}</option>
        </select>
      </div>
    </div>
    <button class="hover:bg-blue-600 w-20 py-2 text-white bg-blue-500 rounded"
      >등록</button
    >
  </form>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import {categoryStore} from "@/store/store.js";


onBeforeMount(async () => {
  await categoryStore.get();
});
</script>

<style>

</style>