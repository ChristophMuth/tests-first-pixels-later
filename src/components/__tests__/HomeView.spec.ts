import { describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '../../router/index.ts'
import { mockAxiosGet } from '@/components/__tests__/utils/axios.ts'
import axios from 'axios'

vi.mock('axios')

describe('Another social network', () => {
  async function createWrapper() {
    await router.push('/')
    await router.isReady()

    return mount(App, { global: { plugins: [router] } })
  }

  const postA = { id: 1, title: 'PostA', body: 'BodyA' }
  const postB = { id: 2, title: 'PostB', body: 'BodyB' }

  it.each([[[postA, postB]], [[postA]]])('should render posts with a title', async (postList) => {
    mockAxiosGet({
      posts: postList,
    })

    const wrapper = await createWrapper()

    const posts = wrapper.findAll('[data-label="post"]')

    expect(posts).toHaveLength(postList.length)

    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/posts')

    expect(posts[0].text()).toContain(postList[0].title)
    expect(posts[0].text()).toContain(postList[0].body)
  })
})
