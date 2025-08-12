import './AchievementsTable.css'

import { Achievements } from '../../data/achievements';
import { User } from '../../data/users';

interface AchievementsTableProps {
    toggleSort: () => void;
    sortState: number;
    sortedAchievements: Achievements[];
    isAchieved: (user: User, achievement: Achievements) => boolean;
    user: User;
}

const AchievementsTable = ({
    toggleSort,
    sortState,
    sortedAchievements,
    isAchieved,
    user
}: AchievementsTableProps) => {
    return (
        <div className="achievements">
            <table>
                <thead>
                    <tr>
                        <th>Achievement</th>
                        <th onClick={toggleSort}>
                            Status
                            {sortState === 0
                                ? ' ⇅'
                                : sortState === 1
                                    ? ' ▼ (Completed first)'
                                    : ' ▲ (Not completed first)'}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAchievements.map((ach) => (
                        <tr key={ach.id}>
                            <td>{ach.name}</td>
                            <td>{isAchieved(user, ach) ? '✅' : '❌'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AchievementsTable;


