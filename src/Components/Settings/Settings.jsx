import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import './Settings.css'

export default function Settings() {
    const [language, setLanguage] = useState('English');
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'Night';
    });
    const [notifications, setNotification] = useState('Yes');

    useEffect(() => {
        document.body.classList.toggle('day-theme', theme === 'Day');
        document.body.classList.toggle('night-theme', theme === 'Night');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'Russian' ? 'English' : 'Russian'));
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'Day' ? 'Night' : 'Day'));
    };

    const toggleNotification = () => {
        setNotification(prevNotification => (prevNotification === 'Yes' ? 'No' : 'Yes'));
    };

    const settingsButtons = [
        { onClick: toggleLanguage, label: language },
        { onClick: toggleTheme, label: theme },
        { onClick: toggleNotification, label: notifications }
    ]

    return (
        <div className='settings'>
            <div className='row-settings'>
                <div className="settings-left">
                    <h2>Language</h2>
                    <h2>Theme</h2>
                    <h2>Notification</h2>
                </div>
                <div className="settings-right">
                    {settingsButtons.map((item, index) => (
                        <div className="button-container" key={index}>
                            <Button onClick={item.onClick} className="btn-settings">
                                <h3>{item.label}</h3>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

