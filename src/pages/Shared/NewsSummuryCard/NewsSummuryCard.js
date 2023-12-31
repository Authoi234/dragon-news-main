import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummuryCard = ({ news }) => {
    const { title, _id, total_view, author, details, image_url, rating } = news;
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        src={author?.img}
                        style={{ height: '60px' }}
                        className='me-2'
                        roundedCircle
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ? <>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></> : details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className="text-danger me-2"></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummuryCard;