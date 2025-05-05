import { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';  
import SearchResults from '../SearchResults/SearchResults'; 

export default function SearchInputContainer({ users, onUserSelect }) {
    const [query, setQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleUserSelect = (user) => {
        onUserSelect(user);  
        setQuery('');         
        setFilteredUsers([]); 
    };

    const noResults = filteredUsers.length === 0 && query;

    return (
        <div>
            <SearchInput
                type="text"              
                placeholder="Search for a user..."  
                value={query}            
                onChange={handleChange}
            />
            {query && (
                <SearchResults
                    filteredUsers={filteredUsers}
                    noResults={noResults}
                    onUserSelect={handleUserSelect}
                />
            )}
        </div>
    );
}

