import { useState, ChangeEvent } from 'react';
import SearchInput from '../SearchInput';  
import SearchResults from '../../SearchResults/SearchResults';
import {User} from '../../../data/users' 

interface SearchInputContainerProps {
    users: User[];
    onUserSelect: (user: User) => void
}

export default function SearchInputContainer({ users, onUserSelect }: SearchInputContainerProps ) {
    const [query, setQuery] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleUserSelect = (user: User) => {
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

