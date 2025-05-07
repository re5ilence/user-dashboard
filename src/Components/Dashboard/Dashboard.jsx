import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import styles from './Dashboard.module.css';

import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true)

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 4}&_limit=4`);
            const posts = await res.json();
            setData(posts);
        }
        loadPosts();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [page])

    return (
        <div className={styles.dashboard}>
            <h2>Fake loading of tables with data</h2>
            <h3>(Made with JSONPlaceholder)</h3>
            <div className={styles.dashboardTable}>
                {loading ? (
                    <div className={styles.spinner}>
                        <Loader />
                    </div>
                ) : (
                    data.map((post) => (
                        <div key={post.id} className={styles.post}>
                            <h4>{post.title}</h4>
                        </div>
                    ))
                )}
            </div>
            <div className={styles.pagination}>
                {[1, 2, 3, 4].map((num) => (
                    <Button
                        key={num}
                        className={`${styles.btnPagination} ${page === num ? styles.active : ''}`}
                        onClick={() => setPage(num)} 
                        >
                        {num}
                    </Button>
                ))}
            </div>
        </div >
    );
}
