import './sidebar.css'

export default function Sidebar({onLogout, onSettings, onProfile}) {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <h3 className="sidebar-header">Sidebar</h3>
                <li className="sidebar-item" onClick={onProfile}>Profile</li>
                <li className="sidebar-item">Dashboard</li>
                <li className="sidebar-item" onClick={onSettings}>Settings</li>
                <li className="sidebar-item" onClick={onLogout}>Logout</li>
            </ul>
        </div>
        
    );
}
