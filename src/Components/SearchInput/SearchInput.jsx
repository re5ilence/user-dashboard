import './SearchInput.css'

export default function SearchInput ({type, placeholder, value, onChange}) {
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