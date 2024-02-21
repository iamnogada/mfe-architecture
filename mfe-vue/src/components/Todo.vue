<template>
  <tr class="last:border-b h-12 border-t border-gray-300">
    <td class="p-2 text-center">{{id}}</td>
    {
      completed ? (
      <td class="p-2 line-through break-words">{{todo}}</td>
      ):(
      <td class="p-2 break-words">{{todo}}</td>
      )
    }
    
    <td class="flex justify-center p-2 text-center">
      {completed ? (
        <button
        class="hover:bg-neutral-900/50 focus:outline-none focus:shadow-outline bg-neutral-700 w-20 px-2 py-1 text-white rounded">
          Undone
        </button>
      ) : (
        <button
        class="hover:bg-blue-900/50 focus:outline-none focus:shadow-outline marker:px-2 w-20 py-1 text-white bg-blue-900 rounded">
          Done
        </button>
      )}
    </td>
  </tr>
</template>

<script setup>
const todo = defineProps({
  id: Number,
  todo: String,
  completed: Boolean
}) // This is a prop
</script>

<style>

</style>