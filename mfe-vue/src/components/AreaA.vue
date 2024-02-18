<template>  
  <div>
    Area
    <div>
      <p>Store: {{ store.count }}</p>
      <button type="button" @click="store.count++">count is {{ store.count }}</button>
    </div>
  </div>
</template>

<script setup>
import {store} from '@store/store.js';

defineProps({
  msg: String,
})
</script>

<style scoped>
/* Your component styles go here */
</style>
