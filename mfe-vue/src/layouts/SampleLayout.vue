<template>
  <div>
    <header>
      <div id="nav">
        <router-link to="/main">Overview</router-link> |
        <router-link to="/todos">Todos</router-link>  |
        <router-link to="/register">Register</router-link>  |
        <router-link to="/category">Category</router-link>
      </div>
    </header>
    <v-sheet class="flex-grow-1">
      <router-view>
      </router-view>
    </v-sheet>
  </div>
</template>

<script setup>

</script>

<style></style>