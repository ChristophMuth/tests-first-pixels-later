import { describe, it, expect, vi } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '../../router/index.ts'
import axios from 'axios'
import { mockAxiosGet } from '@/components/__tests__/utils/axios.ts'

vi.mock('axios')

describe('Social Network Y', () => {
  it('should render 3 posts with title and text', async () => {
    const postA = { id: 1, title: 'A' }
    const postB = { id: 2, title: 'B' }
    const postC = { id: 3, title: 'C' }

    mockAxiosGet({
      posts: [postA, postB, postC],
    })

    const wrapper = mount(App, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('Y')

    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/posts')
    await flushPromises()

    const posts = wrapper.findAll('[data-label=post]')
    expect(posts).toHaveLength(3)

    expect(posts[0].text()).toEqual(postA.title)
    expect(posts[1].text()).toEqual(postB.title)
    expect(posts[2].text()).toEqual(postC.title)
  })
})
