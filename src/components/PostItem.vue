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
.post-item {
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem;

  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: bold;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 1rem;
  }
}
</style>
