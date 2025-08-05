import { useState } from 'react'
import AchievementsTable from '../AchievementsTable'
import achievements, { Achievements } from '../../../data/achievements';
import { User } from '../../../data/users';

interface AchsTableLogicProps {
  user: User;
}

const AchsTableLogic: React.FC<AchsTableLogicProps> = ({ user }) => {
  const [sortState, setSortState] = useState<0 | 1 | 2>(0);

  const toggleSort = (): void => {
    setSortState((prevState) => (prevState + 1) % 3 as 0 | 1 | 2);
  };

  const isAchieved = (user: User, achievement: Achievements): boolean => {
    return (user[achievement.type] as number | undefined ?? 0) >= (achievement.value as number);
  };

  const sortedAchievements = [...achievements].sort((a, b) => {
    if (sortState === 0) {
      return 0;
    }

    const aAchieved = Number(isAchieved(user, a));
    const bAchieved = Number(isAchieved(user, b));

    return sortState === 1 ? bAchieved - aAchieved : aAchieved - bAchieved;
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
};

export default AchsTableLogic;