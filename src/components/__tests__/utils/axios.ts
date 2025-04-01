import axios from 'axios'
import { vi } from 'vitest'

export const mockAxiosGet = (data: Record<string, unknown>) => {
  axios.get = vi.fn().mockResolvedValue({
    data,
  })
}
