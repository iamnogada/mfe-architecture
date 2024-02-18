<script>
import { defineComponent } from 'vue';
import {store} from '@/store/store.js';
// import router from '@/routes/index.js';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup(props,context) {
    console.log("vue app setup");
    // console.log(router.getRoutes());
  }
}


</script>

<template>
 
      <router-view>
      </router-view>

</template>

<style scoped></style>
