import SearchInputContainer from '../SearchInput/SearchInputContainer/SearchInputContainer';
import Button from '../Button/Button'

import './header.css';

export default function Header({ user, users, onUserSelect, currentUser, isProfile }) {
  return (
    <header>
      <h2
        className='profile-switcher-label'
        onClick={() => onUserSelect(user)}>{user.name}'s Dashboard</h2>

      {isProfile && (
        <>
          <SearchInputContainer users={users} onUserSelect={onUserSelect} />
          {user.name !== currentUser.name && (
            <div className='profile-switcher'>
              <h3>Now you're looking {currentUser.name}'s profile</h3>
              <Button onClick={() => onUserSelect(user)}>
                <h4>Back to my profile</h4>
              </Button>
            </div>
          )}
        </>
      )}

    </header>
  );
}

