<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

interface GetPostsResponse {
  posts: Post[]
}

interface Post {
  id: string
  title: string
}

const posts = ref<Post[]>([])

onBeforeMount(async () => {
  const { data } = await axios.get<GetPostsResponse>('https://dummyjson.com/posts')
  posts.value = data.posts
})
</script>

<template>
  <header>
    <h1>Y</h1>

    <div v-for="post in posts" :key="post.id" data-label="post">
      <h2>{{ post.title }}</h2>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
