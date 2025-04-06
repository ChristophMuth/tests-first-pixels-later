<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import PostItem, { type Post } from '@/components/PostItem.vue'

interface GetPostsResponse {
  posts: Post[]
}

const posts = ref<Post[]>([])

onBeforeMount(async () => {
  const { data } = await axios.get<GetPostsResponse>('https://dummyjson.com/posts')
  posts.value = data.posts
})
</script>

<template>
  <div class="posts-grid">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
</style>
