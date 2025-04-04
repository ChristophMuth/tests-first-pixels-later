import { describe, expect, it, vi } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '../../router/index.ts'
import axios from 'axios'
import { mockAxiosGet } from '@/components/__tests__/utils/axios.ts'

vi.mock('axios')

describe('Social Network Y', () => {
  async function createWrapper() {
    await router.push('/')
    await router.isReady()

    return mount(App, { global: { plugins: [router] } })
  }

  it('should render 3 posts with title and description', async () => {
    const postA = { id: 1, title: 'A', body: 'a' }
    const postB = { id: 2, title: 'B', body: 'b' }
    const postC = { id: 3, title: 'C', body: 'c' }

    mockAxiosGet({
      posts: [postA, postB, postC],
    })

    const wrapper = await createWrapper()
    expect(wrapper.text()).toContain('Y')

    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/posts')
    await flushPromises()

    const posts = wrapper.findAll('[data-label=post]')
    expect(posts).toHaveLength(3)

    expect(posts[0].text()).toContain(postA.title)
    expect(posts[1].text()).toContain(postB.title)
    expect(posts[2].text()).toContain(postC.title)

    expect(posts[0].text()).toContain(postA.body)
    expect(posts[1].text()).toContain(postB.body)
    expect(posts[2].text()).toContain(postC.body)
  })
})
