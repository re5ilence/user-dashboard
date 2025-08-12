import { ChangeEvent } from 'react';
import './SearchInput.css'

interface SearchInputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput ({type, placeholder, value, onChange}: SearchInputProps) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="search-input"
            />
        </div>
    )
}