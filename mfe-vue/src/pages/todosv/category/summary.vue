<template>
  <v-card class="mx-auto" fluid>
    <v-list>
      <v-list-subheader>Category</v-list-subheader>
      <v-list-item v-for="(item, index) in items" :key="index">
        <template v-slot:append>
          <v-badge
          color="info"
          content="12"
          inline
        ></v-badge>
        </template>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const items = ref(
  [
    {
      title: 'Item #1',
      value: 1
    },
    {
      title: 'Item #2',
      value: 2
    },
    {
      title: 'Item #3',
      value: 3
    },
  ],
)
</script>

<style></style>