import users from "../../data/users";
import './UserSelectPage.css';

export default function UserSelectPage({ onSelect }) {

    return (
        <div className="user-select-page">
            <h1 className="user-select-header">Select a User</h1>
            <ul className="user-select-list">
                {users.map(user => (
                    <li key={user.id}
                        className="user-select-item"
                        onClick={() => onSelect(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

