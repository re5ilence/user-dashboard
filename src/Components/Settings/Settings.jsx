import { useState, useEffect, useRef } from 'react'
import Button from '../Button/Button'
import './Settings.css'

export default function Settings() {
    const [language, setLanguage] = useState('English');
    const [theme, setTheme] = useState('Night');
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
        
        if (theme === 'Day') {
            document.body.classList.remove('night-theme');
            document.body.classList.add('day-theme');
    
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            const input = document.querySelector('.search-input')
    
            if (header) {
                header.classList.remove('night-theme');
                header.classList.add('day-theme');
            }
    
            if (footer) {
                footer.classList.remove('night-theme');
                footer.classList.add('day-theme');
            }

            if (input) {
                input.classList.remove('night-theme');
                input.classList.add('day-theme');
            }
    
        } else {
            document.body.classList.remove('day-theme');
            document.body.classList.add('night-theme');
    
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            const input = document.querySelector('.search-input');
    
            if (header) {
                header.classList.remove('day-theme');
                header.classList.add('night-theme');
            }
    
            if (footer) {
                footer.classList.remove('day-theme');
                footer.classList.add('night-theme');
            }

            if (input) {
                input.classList.remove('day-theme');
                input.classList.add('night-theme');
            }
        }
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

