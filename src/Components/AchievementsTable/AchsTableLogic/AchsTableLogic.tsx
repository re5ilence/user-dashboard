import { useState } from 'react'

import achievements from '../../../data/achievements'
import AchievementsTable from '../AchievementsTable'

function isAchieved(user, achievement) {
    return user[achievement.type] === undefined || user[achievement.type] >= achievement.value;
    // console.log(`Checking ${achievement.name}:`, achieved);
    // return achieved;
}

export default function AchsTableLogic({ user }) {
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
        <AchievementsTable
            toggleSort={toggleSort}
            sortState={sortState}
            sortedAchievements={sortedAchievements}
            isAchieved={isAchieved}
            user={user}
        />
    );
}