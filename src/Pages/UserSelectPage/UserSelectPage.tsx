import users from "../../data/users";
import './UserSelectPage.css';

interface UserSelectPagePros {
    onSelect: (userId: number) => void
}

export default function UserSelectPage({ onSelect }: UserSelectPagePros) {

    return (
        <div className="user-select-page">
            <h1 className="user-select-header">Select a User</h1>
            <ul className="user-select-list">
                {users.map(user => (
                    <li key={user.id}>
                        <button 
                            className="user-select-item"
                            onClick={() => onSelect(user.id)} >{user.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

