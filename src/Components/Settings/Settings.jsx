import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import './Settings.css'

export default function Settings() {
    const [language, setLanguage] = useState('English');
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'Night';
    });
    const [notifications, setNotification] = useState('Yes');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'Russian' ? 'English' : 'Russian'));
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'Day' ? 'Night' : 'Day'));
    };

    const toggleNotification = () => {
        setNotification(prevNotification => (prevNotification === 'Yes' ? 'No' : 'Yes'));
    };

    useEffect(() => {
        document.body.classList.toggle('day-theme', theme === 'Day');
        document.body.classList.toggle('night-theme', theme === 'Night');
        localStorage.setItem('theme', theme);
      }, [theme]);
      
    return (
        <div className='settings'>
            <div className='row-settings'>
                <div className="settings-left">
                    <h2>Language</h2>
                    <h2>Theme</h2>
                    <h2>Notification</h2>
                </div>
                <div className="settings-right">
                    <div className="button-container">
                        <Button
                            onClick={toggleLanguage}
                            className={'btn-settings'}>
                            <h3>{language}</h3>
                        </Button>
                    </div>
                    <div className="button-container">
                        <Button
                            onClick={toggleTheme}
                            className={'btn-settings'}>
                            <h3>{theme}</h3>
                        </Button>
                    </div>
                    <div className="button-container">
                        <Button
                            onClick={toggleNotification}
                            className={'btn-settings'}>
                            <h3>{notifications}</h3>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

