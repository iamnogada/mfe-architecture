<template>
  <tr class="last:border-b h-12 border-t border-gray-300">
    <td class="p-2 text-center">{{todo.id}}</td>
    <template v-if="todo.completed">
      <td class="p-2 line-through break-words">{{ todo.todo }}</td>
      <td class="flex justify-center p-2 text-center">
        <button @click="update(todo)"
        class="hover:bg-neutral-900/50 focus:outline-none focus:shadow-outline bg-neutral-700 w-20 px-2 py-1 text-white rounded">
          Undone
        </button>
      </td>
    </template>
    <template v-else>
      <td class="p-2 break-words">{{todo.todo}}</td>
      <td class="flex justify-center p-2 text-center">
        <button @click="update(todo)"
        class="hover:bg-blue-900/50 focus:outline-none focus:shadow-outline marker:px-2 w-20 py-1 text-white bg-blue-900 rounded">
          Done
        </button>
      </td>
    </template>
  </tr>
</template>

<script setup>
import {todoStore} from '@/store/store.js';
const props = defineProps(['todo']);

const update = async (todo) => {
  console.log(`update ${todo.id} ${todo.todo} ${todo.completed}`);
  const newTodo = {
    ...todo,
    completed:!todo.completed
  }
  console.log(`newTodo ${newTodo.id} ${newTodo.todo} ${newTodo.completed}`);
  try {
    await todoStore.update(newTodo);
    await todoStore.get();
  } catch (error) {
    console.log(error);
  }
  
}
</script>

<style>

</style>