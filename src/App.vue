<script setup lang="ts">
import { RouterView } from 'vue-router'
import PostsGrid from '@/components/PostsGrid.vue'
</script>

<template>
  <header>
    <h1>Y - The next social network</h1>
  </header>

  <section>
    <PostsGrid />
  </section>

  <RouterView />
</template>

<style scoped></style>
