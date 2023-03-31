export async function getUsers() {
  const users = [{ name: 'John' }, { name: 'Jane' }, { name: 'Daisy' }]
  return await users
}

export async function createUser(username) {
  return await { name: username }
}
