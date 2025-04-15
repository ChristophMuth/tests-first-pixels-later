<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

interface Post {
  id: number
  title: string
  body: string
}

interface GetPostResponse {
  posts: Post[]
}

const posts = ref<Post[]>([])

onBeforeMount(async () => {
  const response = await axios.get<GetPostResponse>('https://dummyjson.com/posts')
  posts.value = response.data.posts
})
</script>

<template>
  <div class="post-items">
    <div v-for="post in posts" :key="post.id" class="post" data-label="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.post {
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
