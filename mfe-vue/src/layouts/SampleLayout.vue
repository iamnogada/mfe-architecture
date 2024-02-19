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
    <main>
      <router-view>
      </router-view>
    </main>
  </div>
</template>

<script setup>

</script>

<style></style>