import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.jpg';
import Brand2 from '../../../assets/brands/Brand2.png';

function BrandCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100' src={Brand1} alt='' />

                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Brand2} alt='' />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BrandCarousel;