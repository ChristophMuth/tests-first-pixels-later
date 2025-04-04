<script setup lang="ts">
export interface Post {
  id: string
  title: string
}

defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="post-item" data-label="post">
    <img :src="`https://picsum.photos/300/200?random=${id}`" alt="" />
    <h2>{{ title }}</h2>
    <p>Lorem ipsum</p>
  </article>
</template>

<style scoped>
.post-item {
  border: 1px solid black;
  padding: 1rem;
}

img {
  width: 100%;
}
</style>
