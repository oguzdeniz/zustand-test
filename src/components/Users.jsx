import { useEffect } from 'react'
import { useRef } from 'react'
import { useStoreUsers } from '../zustand/useStoreUsers'

export default function Users() {
  // global state
  const users = useStoreUsers((state) => state.data)
  const getUsers = useStoreUsers((state) => state.getUsers)
  const createUser = useStoreUsers((state) => state.createUser)

  // local state
  const inputRef = useRef()

  useEffect(() => {
    getUsers()
  }, [])

  const handleChange = (e) => {
    console.log('input:', inputRef.current.value)
  }
  const addUser = () => {
    console.log('add user:', inputRef.current.value)
    createUser(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <div>
      <div>Total: {users?.length}</div>
      <input
        type="text"
        ref={inputRef}
        name="username"
        onChange={handleChange}
      />
      <button onClick={addUser}>Add User</button>
      {users && users.map((user, idx) => <div key={idx}>{user.name}</div>)}
    </div>
  )
}
