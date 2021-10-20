import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [serviceData, setServiceData] = useState({});

    useEffect(() => {
        fetch('./database.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className=" py-md-5">
            <div className="container py-md-5" id="diagnosis">

                <Row className="my-5" xs={1} md={2}>
                    <Col md={2}>
                        <h3 className="text-dark">Diagnosis</h3>
                    </Col>

                    <Col md={10}>
                        <Row xs={1} md={3} lg={4} className="g-4">

                            {
                                serviceData.Diagnosis?.map(diagnosis => <Service
                                    key={diagnosis.id}
                                    service={diagnosis}
                                />)
                            }

                        </Row>
                    </Col>
                </Row>

                <Row className="my-5 py-5" xs={1} md={2}>
                    <Col md={2}>
                        <h3 className="text-dark">Therapy</h3>
                    </Col>

                    <Col md={10}>
                        <Row xs={1} md={3} lg={4} className="g-4">

                            {
                                serviceData.Therapy?.map(therapy => <Service
                                    key={therapy.id}
                                    service={therapy}
                                />)
                            }

                        </Row>
                    </Col>
                </Row>

                <Row className="my-5 py-3" xs={1} md={2}>
                    <Col md={2}>
                        <h3 className="text-dark">Lab Tests</h3>
                    </Col>

                    <Col md={10}>
                        <Row xs={1} md={3} lg={4} className="g-4">

                            {
                                serviceData.Lab?.map(lab => <Service
                                    key={lab.id}
                                    service={lab}
                                />)
                            }

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Services;