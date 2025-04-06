import { describe, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '../../router/index.ts'

vi.mock('axios')

describe('Another social network', () => {
  async function createWrapper() {
    await router.push('/')
    await router.isReady()

    return mount(App, { global: { plugins: [router] } })
  }
})
