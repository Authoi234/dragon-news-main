import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../Shared/NewsSummuryCard/NewsSummuryCard';

const Catagory = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category has news: {categoryNews.length}</h2>    
            {
                categoryNews.map(news => <NewsSummuryCard key={news._id} news={news}></NewsSummuryCard>)
            }
        </div>
    );
};

export default Catagory;