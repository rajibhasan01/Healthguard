import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { service } = props;
    return (
        <Col>
            <Card className="border-0 p-0 text-start card-container mb-4">
                <div className="image-box">
                    <Card.Img variant="top" className="card-image" src={service.img} />
                </div>

                <Card.Body className="ps-0">
                    <Card.Text className="text-muted text-design">{service.D_name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;