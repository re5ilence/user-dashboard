import { User } from '@/data/users';

import './SearchResults.css'

interface SearchResultsProps {
    filteredUsers: User[];
    noResults: (string | boolean);
    onUserSelect: (user: User) => void
}

export default function SearchResults({ filteredUsers, noResults, onUserSelect }: SearchResultsProps) {
    return (
        <ul className="search-results">
            {noResults ? (
                <li className="no-results">Nothing found</li>
            ) : (
                filteredUsers.map(user => (
                    <li
                        key={user.id}
                        className="search-item"
                        onClick={() => onUserSelect(user)}
                    >
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                        <div className={`user-status ${user.status === 'active' ? 'active' : 'blocked'}`}>
                            {user.status === 'active' ? 'Active' : 'Blocked'}
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
}