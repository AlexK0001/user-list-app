export async function fetchUsers() {
  try {
    const res = await fetch('/api/users');
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const initialUsers = await res.json();
    return initialUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}
  