import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';

import './layout.css';

import { User } from '../../data/users'

interface LayoutProps {
  user: User,
  users: User[],
  onLogout: () => void
}

export default function Layout({ user, users, onLogout }: LayoutProps ) {
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    document.title = `${currentUser.name}'s dashboard`;
  }, [currentUser.name]);

  const handleUserSelect = (selectedUser: User) => {
    setCurrentUser(selectedUser);
  };

  const handleLogout = () => {
    onLogout();
    document.title = 'Please log in';
  };

  return (
    <div className='layout'>
      <Header
        user={user}
        users={users}
        onUserSelect={handleUserSelect}
        currentUser={currentUser}
      />
      <main className='layout-body'>
        <Sidebar onLogout={handleLogout} />
        <Outlet context={{ currentUser }} /> 
      </main>
      <Footer />
    </div>
  );
}
