import { useNavigate } from 'react-router-dom';
import './sidebar.css'; 

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <h3 className="sidebar-header">Sidebar</h3>
        <li className="sidebar-item" onClick={() => navigate('/profile')}>Profile</li>
        <li className="sidebar-item" onClick={() => navigate('/dashboard')}>Dashboard</li>
        <li className="sidebar-item" onClick={() => navigate('/settings')}>Settings</li>
        <li className="sidebar-item" onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
}

