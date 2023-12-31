import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    useTitle('News Details')
    const {title, image_url, details, category_id} = news;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant='primary'>All News in this category</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default News;