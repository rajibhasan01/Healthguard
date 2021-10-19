import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import * as IconName from "react-icons/bs";
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { service } = props;

    return (
        <Col>
            <Card className="border-0 p-0 text-start card-container mb-4">
                <div className="image-box">
                    <Card.Img variant="top" className="card-image" src={service.img} />
                </div>

                <Card.Body className="ps-0">
                    <Card.Text className="text-dark text-design">{service.D_name}</Card.Text>
                    <Card.Text className="text-muted">{service.description.slice(0, 50)}</Card.Text>
                    <Link className="text-decoration-none text-info take-appointment read-more" to={`/home/${service.id}`}>Take appointment <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /> </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;