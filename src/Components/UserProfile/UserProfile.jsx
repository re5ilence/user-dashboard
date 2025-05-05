import { useEffect, useRef } from 'react'; 

import './UserProfile.css';
import AchievementsTable from '../AchievementsTable/AchievementsTable'
import StatBox from '../StatBox/StatBox'
import ChartContainer from '../ChartContainer/ChartContainer';
import useCounterAnimation from '../../Animation/useCounterAnimation';
// import useChartAnimations from '../../Animation/useChartAnimation';
import AnimateChart from './AnimateChart';

export default function UserProfile({ user }) {
    const hoursRef = useRef(null);
    const messagesRef = useRef(null);
    const chartRefs = useRef([null, null, null]);

    useCounterAnimation(hoursRef, user.hrs, 1500, 'hours');
    useCounterAnimation(messagesRef, user.msg, 1500, 'messages');
    // useChartAnimations(chartRefs.current, [user.news, user.games, user.movies]);
    useEffect(() => {
        if (chartRefs.current[0]) {
            AnimateChart(chartRefs.current[0], user.news);
        }
        if (chartRefs.current[1]) {
            AnimateChart(chartRefs.current[1], user.games);
        }
        if (chartRefs.current[2]) {
            AnimateChart(chartRefs.current[2], user.movies);
        }
    }, [user.news, user.games, user.movies]);

    return (
        <div className="user-profile">
            <div className="user-profile-items user-profile-items--block1">
                <h2>Time spent on the forum</h2>
                <StatBox ref={hoursRef} />
            </div>
            <div className="user-profile-items user-profile-items--block2">
                <h2>Messages on the forum</h2>
                <StatBox ref={messagesRef} className='online-time--second_block' />
            </div>
            <ChartContainer
                title='Msgs in Category'
                chartRefs={chartRefs}
                labels={['News', 'Games', 'Movies']}
                count={3} />
            <div className="user-profile-items user-profile-items--block4">
                <h2>Achievements</h2>
                <AchievementsTable user={user} />
            </div>
        </div >
    );
}