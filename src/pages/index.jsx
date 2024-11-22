import { useState } from 'react';
import UserList from '../components/UserList';
import AddUserForm from '../components/AddUserForm';
// import { fetchUsers } from '../data/fetchUsers';

export default function Home({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers || []);

  const addUser = async (user) => {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    });
    if (response.ok) {
      const newUser = await response.json();
      setUsers((prev) => [...prev, newUser]);
    }
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <UserList users={users} />
      <AddUserForm onAddUser={addUser} />
    </div>
  );
}

