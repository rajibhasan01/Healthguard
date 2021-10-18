import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Card className="text-white banner-background">
                <Card.Img src="https://i.ibb.co/Jvx6cGR/h7-slider-img-1-removebg.png" alt="Card image" />
                <Card.ImgOverlay>

                    <Card.Text className="col-12 col-md-7 my-md-5 pt-md-5 ps-md-5">
                        <Card.Img src="https://i.ibb.co/BtCbnwj/writing-removebg.png" alt="Card image" />
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
        </>
    );
};

export default Banner;