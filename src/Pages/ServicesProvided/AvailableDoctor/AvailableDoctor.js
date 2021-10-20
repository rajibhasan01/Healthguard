import React from 'react';
import { Card } from 'react-bootstrap';

const AvailableDoctor = ({ doctor }) => {
    return (
        <div className="col-12 ms-lg-5">
            <Card className="border-0">
                <div className="d-flex">
                    <div className="my-auto">
                        <Card.Img variant="top" className="" src={doctor?.img} />
                    </div>

                    <div>
                        <Card.Body>
                            <Card.Title className="text-dark fs-5">{doctor?.D_name}</Card.Title>
                            <Card.Text className="text-dark">
                                How long does it take to get results?
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="border-0 bg-white">
                            <small className="text-muted">Price: ${doctor?.price}</small>
                        </Card.Footer>
                    </div>

                </div>

            </Card>

        </div>
    );
};

export default AvailableDoctor;