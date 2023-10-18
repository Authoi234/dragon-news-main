import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../Shared/NewsSummuryCard/NewsSummuryCard';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h2>Dragon News Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummuryCard
                    key={news._id}
                    news={news}
                ></NewsSummuryCard>)
            }
        </div>
    );
};

export default Home;