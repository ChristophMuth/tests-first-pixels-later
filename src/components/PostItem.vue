<script setup lang="ts">
export interface Post {
  id: string
  title: string
  body: string
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="post-item" data-label="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </article>
</template>

<style scoped>
/*.post-item {
  border: 1px solid black;
  padding: 1rem;
}*/
</style>
