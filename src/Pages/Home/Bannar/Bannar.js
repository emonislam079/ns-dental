import React from 'react';
import { Carousel } from 'react-bootstrap';
import images1 from '../../../images/bannar/Untitled-1.jpg'
import images2 from '../../../images/bannar/Untitled-2.jpg'
import images3 from '../../../images/bannar/Untitled-3.jpg'

const Bannar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={images1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={images2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={images3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        
        </div>
    );
};

export default Bannar;