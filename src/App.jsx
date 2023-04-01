import Users from './components/Users'

export default function App() {
  console.log(import.meta.env.VITE_TEST)
  console.log(import.meta.env.VITE_KEY)
  return (
    <div>
      <Users />
    </div>
  )
}
