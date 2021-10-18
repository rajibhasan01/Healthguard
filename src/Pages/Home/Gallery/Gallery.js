import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <Container fluid className="mb-5">
            <Row className="g-4" xs={1} md={2} lg={4}>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col >
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/yQ4xYwW/h7-gallery-img-1-650x650.jpg" />
                            </div>

                        </Col>

                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/f8q27jw/h7-gallery-img-2-650x650.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>

                <Col>
                    <Row>
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/rQ4PqZS/h7-gallery-img-3-650x1300.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/B4MsxQh/h7-gallery-img-4-650x650.jpg" />
                            </div>
                        </Col>

                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/V9TyvcV/h7-gallery-img-5-650x650.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/7QqzZQF/h7-gallery-img-6-650x1300.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </Container>
    );
};

export default Gallery;