import { useState } from 'react'

import achievements from '../../data/achievements'
import './AchievementsTable.css'

function isAchieved(user, achievement) {
    return user[achievement.type] === undefined || user[achievement.type] >= achievement.value;
}

export default function UserTable({ user }) {
    const [sortState, setSortState] = useState(0);

    const toggleSort = () => {
        setSortState((prevState) => (prevState + 1) % 3);
    };

    const sortedAchievements = [...achievements].sort((a, b) => {
        if (sortState === 0) {
            return 0
        }

        const aAchieved = isAchieved(user, a);
        const bAchieved = isAchieved(user, b);

        if (sortState === 1) {
            return bAchieved - aAchieved;
        } else {
            return aAchieved - bAchieved;
        }
    });

    return (
        <div className="achievements">
            <table>
                <thead>
                    <tr>
                        <th>Achievement</th>
                        <th onClick={toggleSort}>Status 
                            {sortState === 0
                            ? ' ⇅'
                            : sortState === 1
                                ? ' ▼ (Completed first)'
                                : ' ▲ (Not completed first)'}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAchievements.map((ach) => (
                        <tr key={ach.id}>
                            <td>{ach.name}</td>
                            <td>
                                {isAchieved(user, ach) ? '✅' : '❌'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}