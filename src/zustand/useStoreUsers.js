import { create } from 'zustand'
import { getUsers, createUser } from '../api/users'

export const useStoreUsers = create((set, get) => ({
  // Initial data
  data: [],
  loading: false,
  error: null,
  // Actions
  getUsers: async () => {
    try {
      set({ loading: true })
      const response = await getUsers()
      console.log({response})
      set({ loading: false, data: response })
    } catch (err) {
      set({ error: error.message, loading: false })
    }
  },
  createUser: async (username) => {
    try {
      set({ loading: true })
      const response = await createUser(username)
      const updatedData = [...get().data, response]
      set({ loading: false, data: updatedData })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },
}))
