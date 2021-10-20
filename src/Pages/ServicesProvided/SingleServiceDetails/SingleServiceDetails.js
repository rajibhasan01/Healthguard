import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';
import './SingleServiceDetails.css';

const SingleServiceDetails = () => {
    const { serviceID } = useParams();
    const [singleItem, setSingleItem] = useState([]);


    useEffect(() => {
        fetch('/database2.json')
            .then(res => res.json())
            .then(data => setSingleItem(data))
            .catch(error => { console.log(error.message) })

    }, []);

    const key = parseInt(serviceID);

    const displayItem = singleItem.filter(item => key === item.id);

    const rowNumber = [1, 2, 3];



    return (
        <div className="container marginTop py-5">
            <div>
                <div className="row">
                    <div className="col-12 col-md-8 pe-5">

                        <Card.Title className="text-dark fs-4 pb-4">{displayItem[0]?.D_name}</Card.Title>
                        <Card className="border-0 text-start">
                            <Card.Img variant="top" src={displayItem[0]?.img} />
                            <Card.Body className="border-0 ps-0">
                                <Card.Text className="text-muted">
                                    {displayItem[0]?.description}
                                </Card.Text>

                                <Card.Text className="text-dark fs-5">
                                    How long does it take to get results?
                                </Card.Text>

                                <Card.Text className="text-success">
                                    {displayItem[0]?.R_time}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 ps-0 bg-white">
                                <small className="text-muted">Price: ${displayItem[0]?.price}</small>
                            </Card.Footer>
                        </Card>
                    </div>


                    <div className="col-12 col-md-4 mt-5 mt-md-0">

                        <div className="row g-4">
                            <h4 className="ps-md-5 ms-md-2">Available Doctors</h4>
                            {
                                rowNumber.map(item => <AvailableDoctor
                                    key={item}
                                    doctor={displayItem[0]}
                                />)
                            }

                        </div>
                    </div>

                </div>

            </div>

        </div >
    );
};

export default SingleServiceDetails;