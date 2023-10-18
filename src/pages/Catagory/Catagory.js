import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../Shared/NewsSummuryCard/NewsSummuryCard';
import useTitle from '../../hooks/useTitle';

const Catagory = () => {
    const categoryNews = useLoaderData();
    useTitle('Category')
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