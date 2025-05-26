import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';
import UserProfile from '../UserProfile/UserProfile'
import Settings from '../Settings/Settings';
import Dashboard from '../Dashboard/Dashboard';

import './layout.css';
import { useState, useEffect } from 'react';

export default function Layout({ user, users, onLogout }) {
  const [currentUser, setCurrentUser] = useState(user);
  const [activeView, setActiveView] = useState('profile');

  useEffect(() => {
    document.title = `${user.name}'s dashboard`
  }, [user.name]);

  const handleLogout = () => {
    setCurrentUser(null);
    onLogout();
    document.title = 'Please log in'
  };

  const handleUserSelect = (selectedUser) => {
    setCurrentUser(selectedUser);
  }

  const handlePathSettings = () => {
    setActiveView('settings');
  }

  const handlePathProfile = () => {
    setActiveView('profile');
  }

  const handlePathDashboard = () => {
    setActiveView('dashboard')
  }

  let content;
  switch (activeView) {
    case 'settings':
      content = <Settings />;
      break;
    case 'profile':
      content = <UserProfile user={currentUser} />;
      break;
    case 'dashboard':
      content = <Dashboard />;
      break;
  }

  return (
    <div className='layout'>
      <Header
        user={user}
        users={users}
        onUserSelect={handleUserSelect}
        currentUser={currentUser}
        isProfile={activeView === 'profile'} />
      <main className='layout-body'>
        <Sidebar
          onLogout={handleLogout}
          onSettings={handlePathSettings}
          onProfile={handlePathProfile}
          onDashboard={handlePathDashboard} />
        {content}
      </main>
      <Footer />
    </div>
  );
}
