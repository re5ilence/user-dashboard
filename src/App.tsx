import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import UserSelectPage from './Pages/UserSelectPage/UserSelectPage';
import Layout from './Pages/MainLayout/Layout';

import users from './data/users';
import UserProfile from './Pages/UserProfile/UserProfile';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Settings/Settings';

export default function App() {
  const [userId, setUserId] = useState(null); 
  const user = users.find(u => u.id === userId);

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/" element={<UserSelectPage onSelect={setUserId} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <Route
          path="/"
          element={
            <Layout
              user={user} 
              users={users}
              onLogout={() => setUserId(null)}
            />
          }
        >
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      )}
    </Routes>
  );
}
