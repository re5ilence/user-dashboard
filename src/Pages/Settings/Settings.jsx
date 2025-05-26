import { useState, useEffect } from 'react'
import Button from '../../Components/Button/Button'
import './Settings.css'
import { useTranslation } from 'react-i18next'

export default function Settings() {
    const { t, i18n } = useTranslation();
    // const [language, setLanguage] = useState('English');
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'night'; // теперь ключ
    });
    const [notifications, setNotification] = useState('yes'); // теперь ключ

    useEffect(() => {
        document.body.classList.toggle('day-theme', theme === 'day');
        document.body.classList.toggle('night-theme', theme === 'night');
        localStorage.setItem('theme', theme);
    }, [theme]);

    // const toggleLanguage = () => {
    //     setLanguage(prevLanguage => (prevLanguage === 'Russian' ? 'English' : 'Russian'));
    // };
    const toggleLanguage = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
    };

    const toggleTheme = () => {
        setTheme(prev => (prev === 'day' ? 'night' : 'day'));
    };

    const toggleNotification = () => {
        setNotification(prev => (prev === 'yes' ? 'no' : 'yes'));
    };

    // const settingsButtons = [
    //     { onClick: toggleLanguage, label: language },
    //     { onClick: toggleTheme, label: theme },
    //     { onClick: toggleNotification, label: notifications }
    // ]

    const settingsButtons = [
        { onClick: toggleLanguage, label: t(i18n.language === 'ru' ? 'russian' : 'english') },
        { onClick: toggleTheme, label: t(theme) },
        { onClick: toggleNotification, label: t(notifications) }
    ];


    return (
        <div className='settings'>
            <div className='row-settings'>
                <div className="settings-left">
                    {/* <h2>Language</h2>
                    <h2>Theme</h2>
                    <h2>Notification</h2> */}
                    <h2>{t('language')}</h2>
                    <h2>{t('theme')}</h2>
                    <h2>{t('notification')}</h2>
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

