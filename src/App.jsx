import { useState } from 'react';

import UserSelectPage from './Pages/UserSelectPage/UserSelectPage';
import Layout from './Pages/Layout/Layout';

import users from './data/users';


export default function App() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const currentUser = users.find(user => user.id === currentUserId);

  if (!currentUserId) {
    return <UserSelectPage onSelect={setCurrentUserId} />;
  }

  return (
    <Layout
      user={currentUser}
      users={users}
      onLogout={() => setCurrentUserId(null)}
    />
  );
}
