<template>
  <main class="flex-rows justify-stretch flex gap-3">
    <div class="w-1/4">
      <Category />
    </div>
    <div class=" flex-grow">
      <div class="flex items-center justify-between h-16 px-4 text-lg font-bold border rounded-t-lg">
        <p>Todo Information</p>
      </div>
      <Register />
      <Todos />
    </div>
  </main>
</template>

<script setup>
import Todos from '@/pages/todosv/list.vue';
import Register from '@/pages/todosv/register.vue';
import Category from '@/pages/todosv/category/summary.vue';
</script>

<style>

</style>